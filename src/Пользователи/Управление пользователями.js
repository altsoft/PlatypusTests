/**
 * @name 128678203230029
*/
var pswdForm = new Form(132124987465377);

function refreshModel(){
    if (model.modified && confirm('Сохранить изменения?'))
        model.save();
    var mtdUser = dsMtdUsers.USR_ID; 
    dsMtdUsers.requery();
    if (dsMtdUsers.scrollTo(dsMtdUsers.findById(mtdUser)))
        grdMtdUsers.makeVisible(mtdUser);    
}

function btnSaveActionPerformed(evt) {//GEN-FIRST:event_btnSaveActionPerformed
    model.save();
}//GEN-LAST:event_btnSaveActionPerformed

function btnFindActionPerformed(evt) {//GEN-FIRST:event_btnFindActionPerformed
    grdMtdUsers.findSomething();
}//GEN-LAST:event_btnFindActionPerformed

function formWindowClosing(evt) {//GEN-FIRST:event_formWindowClosing
    if (model.modified && confirm('Сохранить изменения?'))
        model.save();
}//GEN-LAST:event_formWindowClosing

function USR_PASSWDSelectValue() {//GEN-FIRST:event_USR_PASSWDSelectValue
    pswdForm.parMtdUser = dsMtdUsers.USR_ID;
    if (pswdForm.showModal() == ok)
        refreshModel();
}//GEN-LAST:event_USR_PASSWDSelectValue

function btnCloseActionPerformed(evt) {//GEN-FIRST:event_btnCloseActionPerformed
    close();
}//GEN-LAST:event_btnCloseActionPerformed

function btnRefreshActionPerformed(evt) {//GEN-FIRST:event_btnRefreshActionPerformed
    refreshModel();
}//GEN-LAST:event_btnRefreshActionPerformed
