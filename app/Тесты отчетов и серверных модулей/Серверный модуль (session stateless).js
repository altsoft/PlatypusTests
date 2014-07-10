/**
 * 
 * @author mg
 * @name TestStatelessServerModule
 * @stateless
 * @public
 */
function TestStatelessServerModule() {
    var self = this, model = P.loadModel(this.constructor.name);

    var stateCounter = 0;
    
    self.testCounter = function(aDelta) {
        stateCounter += aDelta;
        return stateCounter;
    };

    self.testSum = function(a, b) {
        return a + b;
    };

    self.testDate = function() {
        return new Date();
    };

    self.testString = function() {
        return "Sample string";
    };

    self.testBoolean = function() {
        return false;
    };

    self.testNull = function() {
        return null;
    };

    self.testUndefined = function() {
        return undefined;
    };
}