function j() {
    alert("Hello from j()!");
}

function extend(Child, Parent) {
    var F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function Animal() {
}
Animal.prototype.eat = function () {
    P.Logger.info("eat called");
};

function Rabbit() {
}
Rabbit.prototype.run = function () {
    P.Logger.info("run called");
};

extend(Rabbit, Animal);

var r = new Rabbit();
P.Logger.info("r.constructor: " + r.constructor);
P.Logger.info("Rabbit.prototype.constructor: " + Rabbit.prototype.constructor);
if (r.constructor !== Rabbit.prototype.constructor) {
    throw "r.constructor !== Rabbit.prototype.constructor";
}
if (r.constructor !== Rabbit) {
    throw "r.constructor !== Rabbit";
}
r.eat();

P.require(['Messages', 'Alerts', 'ViewsMessages'], function () {

    Messages.prototype.message1 = function (aValue) {
        P.Logger.info("message1; " + aValue);
    };
    Messages.prototype.message2 = function (aValue) {
        P.Logger.info("message2; " + aValue);
    };
    Messages.prototype.message3 = function (aValue) {
        P.Logger.info("message3; " + aValue);
    };
    Messages.prototype.message4 = function (aValue) {
        P.Logger.info("message4; " + aValue);
    };

    // Model js inheritance test
    extend(P.Form, Messages);
    extend(Alerts, Messages);
    var a = new Alerts(70, "Sample argument");
    a.message2("Sample");
    if (a.constructor !== Alerts.prototype.constructor)
        throw "a.constructor !== Alerts.prototype.constructor";
    if (a.constructor !== Alerts)
        throw "a.constructor !== Alerts";
    if (!(a instanceof Alerts))
        throw "a instanceof Alerts violation";
    if (!(a instanceof Messages))
        throw "a instanceof Messages violation";

    var m = new Messages();
    P.Logger.info("m instanceof Messages: " + (m instanceof Messages));

    if (P.agent !== P.HTML5) {
        P.require(['OwnerReport', 'ReportsMessages'], function () {
            extend(OwnerReport, ReportsMessages);
            var or = new OwnerReport();
            if (or instanceof OwnerReport)
                throw "or instanceof OwnerReport violation";
            if (or instanceof ReportsMessages)
                throw "or instanceof ReportsMessages violation";
        });
        P.require("TestReport", function () {
            var r = new TestReport();
        }, function (e) {
            P.Logger.severe(e);
        });
    }
    P.require(["TestView", "TestModule"], function () {
        var v = new TestView(function () {
            P.Logger.info("report callback has been called");
        }, function () {
            P.Logger.info("module callback has been called");
        });
        var m = new TestModule();
    }, function (e) {
        P.Logger.severe(e);
    });
}, function (e) {
    P.Logger.severe(e);
});
