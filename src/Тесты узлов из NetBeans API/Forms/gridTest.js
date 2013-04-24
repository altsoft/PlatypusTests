/*
 * gridTest.js
 *
 * Created on 04.05.2011, 13:03:08
 */

/**
 *
 * @name 130449978849983
 * @author mg
 */
var tc = 0;
appElementType = 20;

function btnCloseActionPerformed(evt) {//GEN-FIRST:event_btnCloseActionPerformed
	close(); 
}//GEN-LAST:event_btnCloseActionPerformed

function btnNextActionPerformed(evt) {//GEN-FIRST:event_btnNextActionPerformed
	entities.next();
}//GEN-LAST:event_btnNextActionPerformed

function btnSetTitleActionPerformed(evt) {//GEN-FIRST:event_btnSetTitleActionPerformed
	grdSample.MDENT_NAME.title = "sample title"+ (tc++)
}//GEN-LAST:event_btnSetTitleActionPerformed

function btnToggleNameActionPerformed(evt) {//GEN-FIRST:event_btnToggleNameActionPerformed
	grdSample.MDENT_NAME.visible = !grdSample.MDENT_NAME.visible;
}//GEN-LAST:event_btnToggleNameActionPerformed

function btnToggleTypeActionPerformed(evt) {//GEN-FIRST:event_btnToggleTypeActionPerformed
	grdSample.MDENT_TYPE.visible = !grdSample.MDENT_TYPE.visible;
}//GEN-LAST:event_btnToggleTypeActionPerformed

function btnToggleIdActionPerformed(evt) {//GEN-FIRST:event_btnToggleIdActionPerformed
	grdSample.MDENT_ID.visible = !grdSample.MDENT_ID.visible;
}//GEN-LAST:event_btnToggleIdActionPerformed

function btnToggleOrderActionPerformed(evt) {//GEN-FIRST:event_btnToggleOrderActionPerformed
	grdSample.MDENT_ORDER.visible = !grdSample.MDENT_ORDER.visible;
}//GEN-LAST:event_btnToggleOrderActionPerformed

function btnToggleParentActionPerformed(evt) {//GEN-FIRST:event_btnToggleParentActionPerformed
	grdSample.MDENT_PARENT_ID.visible = !grdSample.MDENT_PARENT_ID.visible;
}//GEN-LAST:event_btnToggleParentActionPerformed

function btnToggleTag1ActionPerformed(evt) {//GEN-FIRST:event_btnToggleTag1ActionPerformed
	grdSample.TAG1.visible = !grdSample.TAG1.visible;
}//GEN-LAST:event_btnToggleTag1ActionPerformed
