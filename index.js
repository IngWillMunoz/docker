const redis = require('./src/global/redisMethods.js');
const client = redis.initRedis('localhost', 6379);
const Person = require('./src/classes/person.js')

const father = new Person('willberth', '22/05/1990');
const mother = new Person('Diana', '29/09/1987');
const mother2 = new Person('María', '29/09/1987');
const child = new Person('Santiago', '24/11/2016');
const child2 = new Person('Felipe', '29/03/2007');

// insertData = async (key, value) => {
//     await client.set(key, value, (err, reply) => {
//         if (err) throw err;
//         console.log(reply);
//     });
// }
// readData = async (key) => {
//     await client.get(key, (err, reply) => {
//         if (err) throw err;
//         console.log(reply);
//     });
// }
console.log("El padre adopta dos hijos");
father.adopt(child);
father.adopt(child2);

console.log(father.getChildren())

console.log("\n La madre adopta un hijo");
mother.adopt(child);
console.log(mother.getChildren());

console.log("\n Los padres del hijo 1")
console.log(child.getParents())

console.log("\n Los padres del hijo 2")
console.log(child2.getParents())

console.log("\n La madre 2 intenta adoptar un hijo (El hijo1 ya tiene dos padres)")
mother2.adopt(child)
console.log(child.getParents())

console.log("\n La madre 2 intenta adoptar un hijo2 (El hijo2 solo tenía un padre)")
mother2.adopt(child2)
console.log(child2.getParents())


console.log("\n Esto no es un caso de la vida real, los nombres se cambiaron para proteger la identidad de las personas involucradas.");
