/*
 * myDateForm.js
 *
 * Created on Oct 3, 2011, 5:49:38 PM
 */

/**
 *
 * @name 131764977881728
 * @author vv
 */

var testVar = 1;
resultLabel.text = '1111';

function testButtonActionPerformed(evt) {//GEN-FIRST:event_testButtonActionPerformed
    resultLabel.text = 'Date text';
    date1 = new Date(2011, 9, 3);
    date2 = new Date(2011, 9, 4);
    resultLabel.text = date1 < date2;
    testVar = 2;
}//GEN-LAST:event_testButtonActionPerformed

function testButton1ActionPerformed(evt) {//GEN-FIRST:event_testButton1ActionPerformed
        number3 = 100;
        number4 = 200.999;
        resultLabel1.text = number3 < number4;
}//GEN-LAST:event_testButton1ActionPerformed

function testButton2ActionPerformed(evt) {//GEN-FIRST:event_testButton2ActionPerformed
	boolean1 = false;
        boolean2 = true;
        resultLabel2.text = boolean1 < boolean2;
        switch(boolean1)
        {
            case false:
                void(0);
            break;
        }
}//GEN-LAST:event_testButton2ActionPerformed

function testButton3ActionPerformed(evt) {//GEN-FIRST:event_testButton3ActionPerformed
	string1 = 'aa';
        string2 = 'bb';
        resultLabel3.text = string1 < string2;
        switch(string1)
        {
            case "aa":
                void(0);
                break;
        }
}//GEN-LAST:event_testButton3ActionPerformed
