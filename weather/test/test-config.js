var expect = require("chai").expect;
var config = require('./../lib/config');


var units = {
    type: 'us',
    tmp: '˚F',
    speed: 'mph'
};

var ip = '';


describe('Config', function () {
    
    var Config = new config(units, ip);
    it('has 3 props', function () {
        expect(Config.args).to.exist;
        expect(Config.ip).to.exist;
        expect(Config.units).to.exist;
    });

    it('after construction, 2 props are populated', function () {
        expect(Config.args).to.not.equal(null);
        expect(Config.units).to.not.equal(null);
        
    });

    it('has correct key types',function(){
        expect(Config.args).to.be.an('object');
        expect(Config.units).to.be.an('object');
        expect(Config.ip).to.be.an('string');
    });
});