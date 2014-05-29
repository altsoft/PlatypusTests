/**
 * Platypus module script.
 * @name 130892365750900
 * @public
 */

function HttpTestServerModule() {

    var self = this;

    self.testMethod = function(aTestParamOne, aTestParamTwo) {
        Logger.fine("aTestParamOne = " + aTestParamOne);
        Logger.fine("aTestParamTwo = " + aTestParamTwo);

        return aTestParamTwo + 10;
    };
}