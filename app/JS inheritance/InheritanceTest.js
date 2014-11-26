/**
 * 
 * @author mg
 * @constructor
 */ 
function InheritanceTest() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.execute = function () {
        P.require('JS inheritance/inheritance-plain-test.js', function(){
            
        });
    };
}
