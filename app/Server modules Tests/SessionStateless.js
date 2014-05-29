/**
 * 
 * @author Andrew
 * @stateless
 * @public 
 * @module
 */
function SessionStateless() {
    var self = this, model = this.model;
    var callCount = 0;
    
    self.getCallsCount = function() {
        return callCount;  
    };
    
    self.incCallsCount = function(aCounts) {
        callCount += aCounts;  
    };
}
