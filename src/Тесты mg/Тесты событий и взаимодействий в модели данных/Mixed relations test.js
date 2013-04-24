/**
 * @name 128049769692168
 */

function btnSaveActionPerformed(evt) {//GEN-FIRST:event_btnSaveActionPerformed
    model.save();
}//GEN-LAST:event_btnSaveActionPerformed

function formWindowClosing(evt) {//GEN-FIRST:event_formWindowClosing
    if(model.modified && confirm("Сохранить изменения?", form.title))
        model.save();
}//GEN-LAST:event_formWindowClosing
