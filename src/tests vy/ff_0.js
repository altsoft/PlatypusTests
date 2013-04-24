/**
 *
 * @name 134820805590645
 * @author vy
 */

function jButton1ActionPerformed(evt) {//GEN-FIRST:event_jButton1ActionPerformed
	// TODO Добавьте свой код:
        if (!jLabel1.icon) {
            jLabel1.icon = "sofa.png";
        }
}//GEN-LAST:event_jButton1ActionPerformed

function jButton2ActionPerformed(evt) {//GEN-FIRST:event_jButton2ActionPerformed
	// TODO Добавьте свой код:
        jLabel1.alignIconLeft();
}//GEN-LAST:event_jButton2ActionPerformed

function jButton3ActionPerformed(evt) {//GEN-FIRST:event_jButton3ActionPerformed
	// TODO Добавьте свой код:
        jLabel1.alignIconRight();
}//GEN-LAST:event_jButton3ActionPerformed

function jButton4ActionPerformed(evt) {//GEN-FIRST:event_jButton4ActionPerformed
	// TODO Добавьте свой код:
//        alert(jButton4.icon);
        jButton1.text = jButton1.text + '+';
        jButton1.icon = "calculator.png";
        jButton13.icon = "calculator.png";
        jToggleButton1.icon = "cake.png";
        jToggleButton1.text = '-'+jToggleButton1.text;
        
}//GEN-LAST:event_jButton4ActionPerformed

function jButton5ActionPerformed(evt) {//GEN-FIRST:event_jButton5ActionPerformed
	// TODO Добавьте свой код:
       jButton1.alignIconLeft();
       jButton13.alignIconLeft();
      
}//GEN-LAST:event_jButton5ActionPerformed

function jButton6ActionPerformed(evt) {//GEN-FIRST:event_jButton6ActionPerformed
	// TODO Добавьте свой код:
       jButton1.alignIconTop();
       jButton13.alignIconTop();
}//GEN-LAST:event_jButton6ActionPerformed

function jButton7ActionPerformed(evt) {//GEN-FIRST:event_jButton7ActionPerformed
	// TODO Добавьте свой код:
       jButton1.alignIconRight();
       jButton13.alignIconRight();
}//GEN-LAST:event_jButton7ActionPerformed

function jButton8ActionPerformed(evt) {//GEN-FIRST:event_jButton8ActionPerformed
	// TODO Добавьте свой код:
       jButton1.alignIconBottom();
       jButton13.alignIconBottom();
}//GEN-LAST:event_jButton8ActionPerformed

function jButton9ActionPerformed(evt) {//GEN-FIRST:event_jButton9ActionPerformed
	// TODO Добавьте свой код:
       jToggleButton1.alignIconLeft();
}//GEN-LAST:event_jButton9ActionPerformed

function jButton10ActionPerformed(evt) {//GEN-FIRST:event_jButton10ActionPerformed
	// TODO Добавьте свой код:
       jToggleButton1.alignIconTop();
}//GEN-LAST:event_jButton10ActionPerformed

function jButton11ActionPerformed(evt) {//GEN-FIRST:event_jButton11ActionPerformed
	// TODO Добавьте свой код:
       jToggleButton1.alignIconRight();
}//GEN-LAST:event_jButton11ActionPerformed

function jButton12ActionPerformed(evt) {//GEN-FIRST:event_jButton12ActionPerformed
	// TODO Добавьте свой код:
       jToggleButton1.alignIconBottom();
}//GEN-LAST:event_jButton12ActionPerformed
