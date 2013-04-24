/**
 *
 * @name 134691706279633
 * @author vy
 */

function jButton1ActionPerformed(evt) {//GEN-FIRST:event_jButton1ActionPerformed
//    jPanel1.font.size = 35;
//    jPanel1.forceCssStyle();
var font = jButton2.font;
var s = '';
for (var i in font) {
   s += i+'='+font[i]+", \n"; 
}
alert(s);



}//GEN-LAST:event_jButton1ActionPerformed

function jButton2ActionPerformed(evt) {//GEN-FIRST:event_jButton2ActionPerformed
// TODO Добавьте свой код:
//alert("b2");
//alert(jPasswordField1.visible );
//        jLabel1.opaque = !jLabel1.opaque;
//        jButton1.visible = !jButton1.visible;
//        jButton1.text = jButton1.text + 'z';
//        jCheckBox1.text = jCheckBox1.text + "!a";
//        jLabel1.text = jLabel1.text + " q ";
//        jLabel1.visible = !jLabel1.visible;
//        jPasswordField1.visible = !jPasswordField1.visible;
}//GEN-LAST:event_jButton2ActionPerformed

function jButton3ActionPerformed2(evt) {//GEN-FIRST:event_jButton3ActionPerformed2
    // TODO Добавьте свой код:
    jPanel1.font.size = 42;

}//GEN-LAST:event_jButton3ActionPerformed2

function jButton4ActionPerformed(evt) {//GEN-FIRST:event_jButton4ActionPerformed
    jTextField1.font.size = 44;
    jTextField1.font.bold = !jTextField1.font.bold;
    jTextField1.font.italic = !jTextField1.font.italic;
    jTextField1.backgroundColor = "#004455";
    jTextField1.foregroundColor = "#00FF00";
    jTextField1.forceCssStyle();

            
}//GEN-LAST:event_jButton4ActionPerformed
