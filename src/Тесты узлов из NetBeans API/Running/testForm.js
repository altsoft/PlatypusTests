/*
 * testForm.js
 *
 * Created on 29.04.2011, 22:38:02
 */

/**
 *
 * @name 130410228213007
 * @author mg
 */

var saved = true;

appElementType = 40;

function save()
{
    saved = true;
}


function formWindowClosing(evt) {//GEN-FIRST:event_formWindowClosing
    if(!saved)
        throw "can't close the form";
    Logger.info("WindowClosing");
}//GEN-LAST:event_formWindowClosing

function btnSetTitleActionPerformed(evt) {//GEN-FIRST:event_btnSetTitleActionPerformed
    form.title = "Super title";
}//GEN-LAST:event_btnSetTitleActionPerformed

var clicks = 0;

function btnSetIconActionPerformed(evt) {//GEN-FIRST:event_btnSetIconActionPerformed
    form.iconImage = Icons.getImage("anchor.png");
}//GEN-LAST:event_btnSetIconActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
    saved = false;
    Logger.info("WindowOpened");
}//GEN-LAST:event_formWindowOpened

function formWindowClosed(evt) {//GEN-FIRST:event_formWindowClosed
    Logger.info("WindowClosed");
}//GEN-LAST:event_formWindowClosed

function btnCloseActionPerformed(evt) {//GEN-FIRST:event_btnCloseActionPerformed
    close();
}//GEN-LAST:event_btnCloseActionPerformed

function btnSaveActionPerformed(evt) {//GEN-FIRST:event_btnSaveActionPerformed
    saved = true;
}//GEN-LAST:event_btnSaveActionPerformed

function entitiesRowsetRequeried() {//GEN-FIRST:event_entitiesRowsetRequeried
	// TODO add your handling code here:
}//GEN-LAST:event_entitiesRowsetRequeried

