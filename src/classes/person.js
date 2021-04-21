'use strict';
const typeValidation = require('../global/misc.js');
class Person {
    constructor(fullname, birth) {
        this.fullname = fullname;
        this.birth = birth;
        this.parents = Array(Person);
        this.children = Array(Person);
    }

    Person() {
        this.fullname = '';
        this.birth = '01/01/2000';
    }

    getfullname() {
        return (this.fullname);
    }

    setfullname(name) {
        this.fullname = typeValidation(name, 'string') ? name : this.fullname;
    }

    getbirth() {
        return (this.birth);
    }

    setbirth(birth) {
        this.birth = typeValidation(birth, 'object') ? birth : this.birth;
    }

    adopt(child) {
        child.setParent(this, child);
        (this.children).push(child);
    }

    setParent(parent, child){
        if ((child.parents).length < 3) {
            (child.parents).push(new Person(parent));
        }
    }

    getChildren() {
        return this.children;
    }

    getParents() {
        return this.parents;
    }
}

module.exports = Person;
