/**
 * Platypus module script.
 * @name 130892365750900
 * @public
 */

function HttpTestServerModule() {

    var self = this;

    self.testMethod = function(aTestParamOne, aTestParamTwo) {
        P.Logger.fine("aTestParamOne = " + aTestParamOne);
        P.Logger.fine("aTestParamTwo = " + aTestParamTwo);

        return aTestParamTwo + 10;
    };
}