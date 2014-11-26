/**
 * 
 * @author Andrew
 * @public 
 * @constructor
 */
function SessionStatefull() {
    var self = this, model = P.loadModel(this.constructor.name);
    var callCount = 0;

    self.getCallsCount = function () {
        return callCount;
    };

    self.clearCallsCount = function () {
        callCount = 0;
        //return callCount;//TO DO Uncomment when platypus JS will be changed.
    };

    self.incCallsCount = function (aCounts) {
        callCount += aCounts;
        //return callCount; //TO DO Uncomment when platypus JS will be changed.
    };

    self.dateMarshaling = function (aDate) {
        return aDate;
    };

    self.objectWithDateMarshaling = function (aObject) {
        printf(JSON.stringify(aObject));
        return aObject;
    };

    self.numbersMarshallingTest = function (a, b) {
        return a + b;
    };

    self.stringMarshallingTest = function (a, b) {
        return a + b;
    };

    self.booleanMarshallingTest = function (a) {
        return !a;
    };

    self.dateMarshallingTest = function (a) {
        return new Date(a.getTime() + 10);
    };

    self.nullMarshallingTest = function (a) {
        return null;
    };

    self.undefinedMarshallingTest = function (a) {
    };

    self.rowsetMarshalingTest = function () {
        model.reportQuery.requery();
        return model.reportQuery;
    };
}
