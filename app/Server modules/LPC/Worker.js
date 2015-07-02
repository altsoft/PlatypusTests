/* global P */

/**
 * 
 * @author mg
 * @stateless
 * @constructor
 */ 
function Worker() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.execute = function (aAngle) {
        return Math.sin(aAngle);
    };
}
