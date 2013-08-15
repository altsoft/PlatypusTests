/**
 * 
 * @author mg
 * @name Launch
 */

function extend(Child, Parent) {
    var F = function() {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}


// Won't work: Rabbit.prototype - readonly property, because of resource nature of Rabbit (data model with javascript interface)
Animal.prototype.sum = function(a, b){
    return a + b;
};
extend(Rabbit, Animal);

function btnRunActionPerformed(evt) {//GEN-FIRST:event_btnRunActionPerformed
    var r = new Rabbit(45, 89);
    alert(r.sum(4, 5));
}//GEN-LAST:event_btnRunActionPerformed
