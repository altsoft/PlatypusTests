/**
 * 
 * @author mg
 * @constructor
 */ 
function LoadEntityTestClient() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.execute = function (onSuccess, onFailure) {
        var proxy = new P.ServerModule('Load_Entity_Test');
        proxy.execute(onSuccess, onFailure);
    };
}
