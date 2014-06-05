/**
 * 
 * @author Andrew
 * @module
 */
function AsyncServerModuleTests() {
    Logger.info("- 1 - AsyncServerModuleTests");
    var self = this, model = P.loadModel(this.constructor.name);

    Logger.info("- 2 - AsyncServerModuleTests");
    var sessionStatefull = new P.ServerModule("SessionStatefull");

    var primitiveCalls = 0;
    var statefullCalls = 0;
    var statelessCalls = 0;
    var dateMarshallCalls = 0;
    var failed = null;

    function checkEnd() {
        if (primitiveCalls === 4 && statefullCalls === 3 && statelessCalls === 3 && dateMarshallCalls === 3) {
            if (self.onSuccess) {
                if (failed === null) {
                    self.onSuccess();
                } else {
                    Logger.severe("AsyncServerModuleTests failed (" + failed + ")");
                }
            } else {
                Logger.severe("self.onSuccess is absent. So unable to report about test's result");
            }
        }
    }
    Logger.info("- 3 - AsyncServerModuleTests");
    // Statefull test
    sessionStatefull.getCallsCount(function(aValue) {
        statefullCalls++;
        if (aValue !== 0) {
            failed = "Fail SessionStatefull module getCallsCount test.";
        }
        sessionStatefull.incCallsCount(3, function() {
            statefullCalls++;
            sessionStatefull.getCallsCount(function(aValue1) {
                statefullCalls++;
                if (aValue1 !== 3) {
                    failed = "Fail SessionStatefull module getCallsCount test.";
                }
                checkEnd();
            });
            checkEnd();
        });
        checkEnd();
    });
    // Statefull test
    var sessionStateless = new P.ServerModule("SessionStateless");
    var parallelCallsConsumer = function(aValue) {
        statelessCalls++;
        if (aValue !== 0) {
            failed = "Fail SessionStateless module getCallsCount test.";
        }
        checkEnd();
    };
    sessionStateless.getCallsCount(parallelCallsConsumer);
    sessionStateless.incCallsCount(3, function() {
        statelessCalls++;
        sessionStateless.getCallsCount(parallelCallsConsumer);
        checkEnd();
    });
    // Date marshalling test
    var now = new Date();
    sessionStatefull.dateMarshaling(now, function(aValue) {
        dateMarshallCalls++;
        if (!aValue || aValue.getTime() !== now.getTime()) {
            failed = "Fail SessionStatefull module dateMalshaling test.";
        }
        checkEnd();
    });
    var sendObj = {date: now, data: ["test", now, 2, true, 7.55], obj: {dt: now}};
    sessionStatefull.objectWithDateMarshaling(sendObj, function(getObj) {
        dateMarshallCalls++;
        if (sendObj.date.getTime() !== getObj.date.getTime()) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sendObj.data[0] !== getObj.data[0]) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sendObj.data[1].getTime() !== getObj.data[1].getTime()) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sendObj.data[2] !== getObj.data[2]) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sendObj.data[3] !== getObj.data[3]) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sendObj.obj.dt.getTime() !== getObj.obj.dt.getTime()) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        checkEnd();
    });
    var sObj = new Object();
    sObj.date = now;
    sObj.data = ["test", now, 2, true, 7.55];
    sObj.obj = new Object();
    sObj.obj.dt = now;
    sessionStatefull.objectWithDateMarshaling(sObj, function(gObj) {
        dateMarshallCalls++;
        if (sObj.date.getTime() !== gObj.date.getTime()) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sObj.data[0] !== gObj.data[0]) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sObj.data[1].getTime() !== gObj.data[1].getTime()) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sObj.data[2] !== gObj.data[2]) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sObj.data[3] !== gObj.data[3]) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        if (sObj.obj.dt.getTime() !== gObj.obj.dt.getTime()) {
            failed = "Fail SessionStatefull module objectWithDateMarshaling test.";
        }
        checkEnd();
    });
    sessionStatefull.numbersMarshallingTest(4, 5, function(aSum) {
        primitiveCalls++;
        if (aSum !== (4 + 5)) {
            failed = "Fail SessionStatefull module numbersMarshallingTest test";
        }
        checkEnd();
    });
    sessionStatefull.stringMarshallingTest('4', '5', function(aSum) {
        primitiveCalls++;
        if (aSum !== '45') {
            failed = "Fail SessionStatefull module stringMarshallingTest test";
        }
        checkEnd();
    });
    sessionStatefull.booleanMarshallingTest(true, function(aInverse) {
        primitiveCalls++;
        if (aInverse) {
            failed = "Fail SessionStatefull module booleanMarshallingTest test";
        }
        checkEnd();
    });
    sessionStatefull.dateMarshallingTest(now, function(aIncremented) {
        primitiveCalls++;
        var incremented = new Date(now.getTime() + 10);
        if (incremented.geTime() !== aIncremented.geTime()) {
            failed = "Fail SessionStatefull module dateMarshallingTest test";
        }
        checkEnd();
    });
}
