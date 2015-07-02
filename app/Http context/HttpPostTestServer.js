/**
 * 
 * @author alexey
 * @constructor
 * @public
 * @stateless
 */ 
function HttpPostTestServer() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.test = function(aInput) {
        var c = new P.HttpContext();
        return c.request.body;
    };
}
