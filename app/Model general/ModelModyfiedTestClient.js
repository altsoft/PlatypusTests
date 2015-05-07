/**
 * 
 * @author user
 * @constructor
 */ 
function ModelModyfiedTestClient() {
    var self = this, model = P.loadModel(this.constructor.name);
    
   self.execute = function (onSuccess, onFailure) {
        var proxy = new P.ServerModule('ModelModyfiedTest');
        proxy.execute(onSuccess, onFailure);
    };
}
