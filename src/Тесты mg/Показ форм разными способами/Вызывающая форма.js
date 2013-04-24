/**
 * @name Большая
 */
var FORM1_RUNNER = null;

function checkSmallForm()
{
    if(FORM1_RUNNER == null)
        FORM1_RUNNER = new Form("Маленькая");
}

function btnTest2ActionPerformed(evt) {//GEN-FIRST:event_btnTest2ActionPerformed
    checkSmallForm();
    FORM1_RUNNER.showInternalFrame(pnlDesktop);
}//GEN-LAST:event_btnTest2ActionPerformed

function btnShowOnPanelActionPerformed(evt) {//GEN-FIRST:event_btnShowOnPanelActionPerformed
    checkSmallForm();
    FORM1_RUNNER.showOnPanel(pnlContainer);
}//GEN-LAST:event_btnShowOnPanelActionPerformed

function btnTest1ActionPerformed(evt) {//GEN-FIRST:event_btnTest1ActionPerformed
    checkSmallForm();
    if (cbModal1.selected)
    {
        FORM1_RUNNER.showModal();
    }else
    {
        FORM1_RUNNER.show();
    }
}//GEN-LAST:event_btnTest1ActionPerformed

function btnMinnimizeActionPerformed(evt) {//GEN-FIRST:event_btnMinnimizeActionPerformed
    pnlDesktop.minimizeAll();
}//GEN-LAST:event_btnMinnimizeActionPerformed

function btnRestoreActionPerformed(evt) {//GEN-FIRST:event_btnRestoreActionPerformed
    pnlDesktop.restoreAll();
}//GEN-LAST:event_btnRestoreActionPerformed

function btnMaximizeActionPerformed(evt) {//GEN-FIRST:event_btnMaximizeActionPerformed
    pnlDesktop.maximizeAll();
}//GEN-LAST:event_btnMaximizeActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
    pnlDesktop.closeAll();
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
    alert(pnlDesktop.forms);
}//GEN-LAST:event_button1ActionPerformed
