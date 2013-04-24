/*
 * vetrTestForm.js
 *
 * Created on 09.05.2011, 21:04:23
 */

/**
 *
 * @name 130496066305481
 * @author mg
 */

function btnCloseActionPerformed(evt) {//GEN-FIRST:event_btnCloseActionPerformed
    close();
}//GEN-LAST:event_btnCloseActionPerformed

function formWindowClosing(evt) {//GEN-FIRST:event_formWindowClosing
    if(model.modified)
            if(confirm("Сохранить изменения?", form.title))
                model.save();
}//GEN-LAST:event_formWindowClosing
