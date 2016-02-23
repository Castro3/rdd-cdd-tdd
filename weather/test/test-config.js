var expect = require("chai").expect;
var config = require('./../lib/config');


var units = {
    type: 'us',
    tmp: '˚F',
    speed: 'mph'
};

var ip = '';


describe('Config', function () {
    
    it('has 3 props', function () {
        var Config = new config(units, ip);
        expect(Config.args).to.exist;
        expect(Config.ip).to.exist;
        expect(Config.units).to.exist;
    });

    it('after construction, 2 props are populated', function () {
        var Config = new config(units, ip);
        expect(Config.args).to.not.equal(null);
        expect(Config.units).to.not.equal(null);
        
    });

    it('has correct key types',function(){
        
    });
});