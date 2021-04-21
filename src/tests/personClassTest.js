const assert = require('chai').assert;
const person = require('../classes/person.js');

const defaultValue = '';
const defaultBirth = new Date('01/01/1980');

describe('Given no fullname, person getfullname function should return default value)', () => {
    const personInst = new person();
    it('get fullname', () => {
        const name = personInst.getfullname();
        assert.equal(name, defaultValue);
    });
});

describe('Given a bad fullname, person getfullname function should set the default value', () => {
    const personInst = new person();
    it('setfullname(null) then get fullname()', () => {
        personInst.setfullname(null);
        const name = personInst.getfullname();
        assert.equal(name, defaultValue);
    });
    it('setfullname() then get fullname()', () => {
        personInst.setfullname();
        const name = personInst.getfullname();
        assert.equal(name, defaultValue);
    });
    it('setfullname(undefined) then get fullname()', () => {
        personInst.setfullname(undefined);
        const name = personInst.getfullname();
        assert.equal(name, defaultValue);
    });
    it('setfullname(123) then get fullname()', () => {
        personInst.setfullname(123);
        const name = personInst.getfullname();
        assert.equal(name, defaultValue);
    });
});

describe('Given a valid fullname, person getfullname function should return the given fullname)', () => {
    const personInst = new person();
    const fullname = 'Willberth';
    it('setfullname(name) then get fullname', () => {
        personInst.setfullname(fullname);
        const name = personInst.getfullname();
        assert.equal(name, fullname);
    });
});

describe('Given no date, person getbirth function should return default value)', () => {
    const personInst = new person();
    it('get birth', () => {
        const date = personInst.getbirth();
        assert.deepEqual(new Date(date), new Date(defaultBirth));
    });
});

describe('Given a bad date request, person getbirth function should set the default value', () => {
    const personInst = new person();
    it('setbirth(null) then getbirth()', () => {
        personInst.setbirth(null);
        const birth = personInst.getbirth();
        assert.deepEqual(birth, defaultBirth);
    });
    it('setbirth() then getbirth()', () => {
        personInst.setbirth();
        const birth = personInst.getbirth();
        assert.deepEqual(birth, defaultBirth);
    });
    it('setbirth(undefined) then getbirth()', () => {
        personInst.setbirth(undefined);
        const birth = personInst.getbirth();
        assert.deepEqual(birth, defaultBirth);
    });
    it('setbirth(123) then getbirth()', () => {
        personInst.setbirth(123);
        const birth = personInst.getbirth();
        assert.deepEqual(birth, defaultBirth);
    });
});

describe('Given a valid date, person getbirth function should return the given birth', () => {
    const personInst = new person();
    const birth = new Date('01/01/2000');
    it('setbirth(date) then getbirth', () => {
        personInst.setbirth(birth);
        const date = personInst.getbirth();
        assert.deepEqual(date, birth);
    });
});
