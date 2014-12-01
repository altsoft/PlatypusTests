/**
 * 
 * @author user
 * @constructor
 */ 
function testSupport() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    var setv = new P.ServerModule("testWSServer");
   
    self.execute = function () {
         setv.sendSimpleMessage();
    };
}
