/**
 * 
 * @author user
 * @constructor
 * @public
 * @stateless
 */ 
function ModelModyfiedTest() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    // Nesessary to test:
    // Work of modified field
    // Work of modified field with revert
    // 1 - check that model is not modified
    // 2 - modify and check flag
    // 3 - revert and check flag
    // 4 - modify and save
    self.execute = function () {
        
        if (model.modified==true){
             throw "Modified has been set for unmodified datamodel";
        }
    };
}
