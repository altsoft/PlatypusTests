/**
 * 
 * @author Andrew
 * @public 
 * @module
 */
function SessionStatefull() {
    var self = this, model = this.model;
    var callCount = 0;
    
    self.getCallsCount = function() {
        return callCount;  
    };
    
    self.incCallsCount = function(aCounts) {
        callCount += aCounts;  
    };
    
    self.dateMarshaling = function(aDate) {
        return aDate;
    };
    
    self.objectWithDateMarshaling = function(aObject) {
        printf(JSON.stringify(aObject));
        return aObject;
    };
}
