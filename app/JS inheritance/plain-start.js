
function j() {
    alert("Hello from j()!");
}


require(["TestView", "TestReport", "TestModule"], function() {
    new TestView(
            function() {
                var rep = new TestReport();
                rep.show();
            },
            function() {
                var m = new TestModule();
                alert(m.sum(90, 89));
            }
    ).show();
});

function extend(Child, Parent) {
    var F = function() {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function Animal() {
}
Animal.prototype.eat = function() {
    P.Logger.info("eat called");
};

function Rabbit() {
}
Rabbit.prototype.run = function() {
    P.Logger.info("run called");
};

extend(Rabbit, Animal);
/*
 var r = new Rabbit();
 Logger.info("r.constructor: " + r.constructor);
 Logger.info("Rabbit.prototype.constructor: " + Rabbit.prototype.constructor);
 Logger.info("r.constructor == Rabbit.prototype.constructor: " + r.constructor == Rabbit.prototype.constructor);
 Logger.info("r.constructor == Rabbit: " + r.constructor == Rabbit);
 */

//extend(Messages, Module);

Messages.prototype.message1 = function(aValue) {
    P.Logger.info("message1; " + aValue);
};
Messages.prototype.message2 = function(aValue) {
    P.Logger.info("message2; " + aValue);
};
Messages.prototype.message3 = function(aValue) {
    P.Logger.info("message3; " + aValue);
};
Messages.prototype.message4 = function(aValue) {
    P.Logger.info("message4; " + aValue);
};

extend(Alerts, Messages);
var a = new Alerts(70, "Sample argument");
a.message2("Sample");
P.Logger.info("a.constructor == Alerts.prototype.constructor: " + a.constructor === Alerts.prototype.constructor);
P.Logger.info("a.constructor == Alerts: " + a.constructor === Alerts);
P.Logger.info("a instanceof Alerts: " + (a instanceof Alerts));
P.Logger.info("a instanceof Messages: " + (a instanceof Messages));
P.Logger.info("a instanceof Module: " + (a instanceof Module));

var m = new Messages();
Logger.info("m instanceof Messages: " + (m instanceof Messages));
Logger.info("m instanceof Module: " + (m instanceof Module));

extend(OwnerView, ViewsMessages);
var ow = new OwnerView();
Logger.info("ow instanceof OwnerView: " + (ow instanceof OwnerView));
Logger.info("ow instanceof ViewsMessages: " + (ow instanceof ViewsMessages));
Logger.info("ow instanceof Form: " + (ow instanceof Form));
Logger.info("ow instanceof Module: " + (ow instanceof Module));

extend(OwnerReport, ReportsMessages);
var or = new OwnerReport();
Logger.info("or instanceof OwnerReport: " + (or instanceof OwnerReport));
Logger.info("or instanceof ReportsMessages: " + (or instanceof ReportsMessages));
Logger.info("or instanceof Report: " + (or instanceof Report));
Logger.info("or instanceof Module: " + (or instanceof Module));


var ma = new Module("Alerts");
Logger.info("ma instanceof Alerts: " + (ma instanceof Alerts));
Logger.info("ma instanceof Module: " + (ma instanceof Module));
var fow = new Form("OwnerView");
Logger.info("fow instanceof OwnerView: " + (fow instanceof OwnerView));
Logger.info("fow instanceof Form: " + (fow instanceof Form));
Logger.info("fow instanceof Module: " + (fow instanceof Module));
var ror = new Report("OwnerReport");
Logger.info("ror instanceof OwnerReport: " + (ror instanceof OwnerReport));
Logger.info("ror instanceof Report: " + (ror instanceof Report));
Logger.info("ror instanceof Module: " + (ror instanceof Module));