/**
 * 
 * @author mg
 * @name Launch
 */

function Launch() {
    var self = this,
            model = P.loadModel(this.constructor.name),
            form = P.loadForm(this.constructor.name);

    function extend(Child, Parent) {
        var F = function () {
        };
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.superclass = Parent.prototype;
    }

    // Won't work: Rabbit.prototype - readonly property, because of resource nature of Rabbit (data self.model with javascript interface)
    Animal.prototype.sum = function (a, b) {
        return a + b;
    };
    extend(Rabbit, Animal);
    form.btnRun.onActionPerformed = function (event) {
        var r = new Rabbit(45, 89);
        alert(r.sum(4, 5));
    };
}