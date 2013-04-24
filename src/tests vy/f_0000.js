/**
 *
 * @name 134797996015666
 * @author vy
 */

function testGetter(comp, property) {
    return comp[property];
}

function testSetter(comp, property, value) {
    var s = 'Start: ' + comp[property] + ' ; ';
    comp[property] = value;
    s += 'Finish: ' + comp[property];
    s += '        (Required result: '+ value + ')' ;
    alert(s);
    return s;
}

function jButton1ActionPerformed(evt) {//GEN-FIRST:event_jButton1ActionPerformed
    alert(testGetter(jButton1,"text"));
    testSetter(jButton1,"text","!Test!");
    alert(testGetter(jButton1,"text"));
}//GEN-LAST:event_jButton1ActionPerformed
