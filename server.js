const express = require('express')
const app = express()
const redis = require('redis')
const bodyParser = require('body-parser')
const cors = require('cors')
const client = redis.createClient('redis://localhost:6379')
const Person = require('./src/classes/person.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
let person = new Person;

app.get('/create', (req, res) => {
  const fullname = req.query.name;
  const birth = req.query.birth;
  const adopt = req.query.adopt;
  person = new Person(fullname, birth);
  if (adopt) {
    client.get(adopt, (error, result) => {
      if (result) {
        const child = JSON.parse(result);
        person.adopt(new Person(child.fullname, child.birth));
        console.log(person.children)
        saveInCache(person);
        return;
      } else {
        console.log('error')
      }
    })
  }
  saveInCache(person);
})

const saveInCache = (person) => {
  person = { ...person };
  // console.log(person);
  if (person.children.length > 1) {
    person.children = typeof person.children == 'object' ? JSON.stringify(person.children, function (key, value) {
      if ((value[1].fullname) && (value[1].fullname !== person.fullname)) {
        return value[1].fullname;
      } else {
        return value;
      };
    }) : person.children;
  }
  const dataToSave = JSON.stringify(person);
  client.exists(person.fullname, (error, result) => {
    if (result) {
      client.expire(person.fullname, 60);
    } else {
      client.set(person.fullname, dataToSave);
      client.expire(person.fullname, 60);
    }
  })
}

const getFromCache = async (fullname, res) => {
  client.get(fullname, (error, result) => {
    if (result) {
      res.send(`
        <html>
            <head>
            </head>
            <body>
            The Result is: ${result}
            </body>
        </html>
      `)
    } else {
      console.log('error')
    }
  })
}

app.get('/read', async (req, res) => {
  const fullname = req.query.name;
  const data = await getFromCache(fullname, res);
})

app.listen(8080)