/**
 *
 * @name 134761147045376
 * @author vy
 */

function jButton2ActionPerformed(evt) {//GEN-FIRST:event_jButton2ActionPerformed
	// TODO Добавьте свой код:
        jSlider1.value--;
jButton7.font = new java.awt.Font('Courier',java.awt.Font.BOLD+java.awt.Font.ITALIC,20);        
}//GEN-LAST:event_jButton2ActionPerformed

function jButton1ActionPerformed(evt) {//GEN-FIRST:event_jButton1ActionPerformed
	// TODO Добавьте свой код:
        jSlider1.maximum = 10;
        jSlider1.maximum = 110;
        jSlider1.value = 20;
        
        //new java.awt.Font('Courier',0,20);
        
        jButton7.setFont(new java.awt.Font('Courier',java.awt.Font.ITALIC,20));
}//GEN-LAST:event_jButton1ActionPerformed

function jButton3ActionPerformed(evt) {//GEN-FIRST:event_jButton3ActionPerformed
	// TODO Добавьте свой код:
        
//        alert('1='+jToggleButton1.selected+' 2='+jToggleButton2.selected+' 3='+jToggleButton3.selected);
//        if (jToggleButton1.selected) {
//            jToggleButton1.selected = false;
//            jToggleButton2.selected = true;
//        }
//        else if (jToggleButton2.selected) {
//            jToggleButton2.selected = false;
//            jToggleButton3.selected = true
//        }
//        else if (jToggleButton3.selected) {
//            jToggleButton3.selected = false;
//            jToggleButton1.selected = true
//        }
//        alert('1='+jToggleButton1.selected+' 2='+jToggleButton2.selected+' 3='+jToggleButton3.selected);
}//GEN-LAST:event_jButton3ActionPerformed

function jButton4ActionPerformed(evt) {//GEN-FIRST:event_jButton4ActionPerformed
	// TODO Добавьте свой код:
 jToggleButton1.selected = false;
}//GEN-LAST:event_jButton4ActionPerformed

function jButton5ActionPerformed(evt) {//GEN-FIRST:event_jButton5ActionPerformed
	// TODO Добавьте свой код:
//        jTextField1.caretPosition++;
//        jButton5.text = jTextField1.caretPosition;
}//GEN-LAST:event_jButton5ActionPerformed

function jTextField1MouseMoved(evt) {//GEN-FIRST:event_jTextField1MouseMoved
	// TODO Добавьте свой код:
        jTextField1.caretPosition = 6;
        jButton5.text = jTextField1.caretPosition;
}//GEN-LAST:event_jTextField1MouseMoved

function jButton6ActionPerformed(evt) {//GEN-FIRST:event_jButton6ActionPerformed
	// TODO Добавьте свой код:
//        var i;
//        i = i || 10;
//        i = i + 10;
//        jProgressBar1.updateProgress(i);
var i = 10;
i = i + 2;
i = i / 0;

}//GEN-LAST:event_jButton6ActionPerformed

function jButton7ActionPerformed(evt) {//GEN-FIRST:event_jButton7ActionPerformed
	// TODO Добавьте свой код:
        if (jLabel1.borderText == 'tt') 
        jLabel1.borderText = jLabel1.borderText + '_qwer';
    else 
                jLabel3.borderText = '!!_'+jLabel1.borderText + '_!!';

}//GEN-LAST:event_jButton7ActionPerformed
