/*
 * testServerModulePropertys.js
 *
 * Created on 19.06.2012, 18:31:50
 */

/**
 *
 * @name 134011631094638
 * @author andrew
 */
var sm = new ServerModule("134002903893458");
var sr = new ServerReport("134062649490636");

function jButton1ActionPerformed(evt) {//GEN-FIRST:event_jButton1ActionPerformed
    alert(sm.testFunction());
    
    alert(sm.testPropertyString);
    sm.testPropertyString = "endtest";
    alert(sm.testPropertyString);
    sm.testPropertyString = new Date();
    alert(sm.testPropertyString);
    sm.testPropertyString = 100;
    alert(sm.testPropertyString);
    sm.testPropertyString = 100.786;
    alert(sm.testPropertyString);
    sm.testPropertyString = true;
    alert(sm.testPropertyString);
    sm.testPropertyString = null;
    alert(sm.testPropertyString);
    sm.testPropertyString = undefined;
    alert(sm.testPropertyString);
}//GEN-LAST:event_jButton1ActionPerformed

function jButton2ActionPerformed(evt) {//GEN-FIRST:event_jButton2ActionPerformed
    sr.testParamString = "47092734";
    sr.testParam = new Date();
    sr.testValue = "wyiosccshkl";
    sr.show();
    
}//GEN-LAST:event_jButton2ActionPerformed
