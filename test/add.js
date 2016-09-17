var add = require('../add');
var assert = require('assert');

describe('Add:', function() {
    it('should take two parameters, add them and return the result', function() {
        var result = add(5, 2);

        assert.equal(result, 7);
    });
});