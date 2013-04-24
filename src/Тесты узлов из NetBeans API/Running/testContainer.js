/*
 * testContainer.js
 *
 * Created on 02.05.2011, 9:12:53
 */

/**
 *
 * @name 130431317366981
 * @author mg
 */

var child = new Form(130410228213007);

child.appElementType = 20;

function btnDisplayAsFrameActionPerformed(evt) {//GEN-FIRST:event_btnDisplayAsFrameActionPerformed
    child.show();
}//GEN-LAST:event_btnDisplayAsFrameActionPerformed

function btnDisplayAsDialogActionPerformed(evt) {//GEN-FIRST:event_btnDisplayAsDialogActionPerformed
    child.showModal();
}//GEN-LAST:event_btnDisplayAsDialogActionPerformed

function btnDisplayAsInternalFrameActionPerformed(evt) {//GEN-FIRST:event_btnDisplayAsInternalFrameActionPerformed
    child.showInternalFrame(desk);
}//GEN-LAST:event_btnDisplayAsInternalFrameActionPerformed

function btnDisplayOnContainerActionPerformed(evt) {//GEN-FIRST:event_btnDisplayOnContainerActionPerformed
    child.showOnPanel(frame);
}//GEN-LAST:event_btnDisplayOnContainerActionPerformed

function btnCloseActionPerformed(evt) {//GEN-FIRST:event_btnCloseActionPerformed
    child.close();
}//GEN-LAST:event_btnCloseActionPerformed
