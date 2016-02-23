var expect = require("chai").expect;
    format = require('./../lib/format');

describe('format', function () {
    it('is a constructor of the Format object',function()
      {
        expect(typeof(format) === 'function').to.be.true;
    });
});
