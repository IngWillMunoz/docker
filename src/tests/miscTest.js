const assert = require('chai').assert;
const typeValidation = require ('../global/misc.js');
const date = new Date('05/22/1990');
describe('given a bad request typeValidation function should return false', () => {
    it('given a null-null value', () => {
        const value = typeValidation();
        assert.equal(value, false);
    });
    it('given a undefined, undefined value', () => {
        const value = typeValidation(undefined, undefined);
        assert.equal(value, false);
    });
    it('given a undefined, null value', () => {
        const value = typeValidation(undefined);
        assert.equal(value, false);
    });
    it('given a name,null value', () => {
        const value = typeValidation('name');
        assert.equal(value, false);
    });
    it('given a name, undefined value', () => {
        const value = typeValidation('name', undefined);
        assert.equal(value, false);
    });
    it('given a date, undefined value', () => {
        const value = typeValidation(date, undefined);
        assert.equal(value, false);
    });
    it('given a date, null value', () => {
        const value = typeValidation(date);
        assert.equal(value, false);
    });
    it('given a undefined, object value', () => {
        const value = typeValidation(undefined, 'object');
        assert.equal(value, false);
    });
});

describe('given a well formed request typeValidation function should return true', () => {
    it('given a date, string value', () => {
        const value = typeValidation('date', 'string');
        assert.equal(value, true);
    });
    it('given a date, object value', () => {
        const value = typeValidation(date, 'object');
        assert.equal(value, true);
    });
});