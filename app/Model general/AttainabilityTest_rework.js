/**
 * @name AttainabilityTestView_1
 */

function AttainabilityTestView_1() {

    var self = this;


function ds11OnRequeried(evt) {//GEN-FIRST:event_ds11OnRequeried
        Logger.info("ds11OnRequeried");
}//GEN-LAST:event_ds11OnRequeried

function ds11OnFiltered(evt) {//GEN-FIRST:event_ds11OnFiltered
        Logger.info("ds11OnFiltered");
}//GEN-LAST:event_ds11OnFiltered

function ds21OnRequeried(evt) {//GEN-FIRST:event_ds21OnRequeried
        Logger.info("ds21OnRequeried");
}//GEN-LAST:event_ds21OnRequeried

function ds21OnFiltered(evt) {//GEN-FIRST:event_ds21OnFiltered
        Logger.info("ds21OnFiltered");
}//GEN-LAST:event_ds21OnFiltered

function ds22OnRequeried(evt) {//GEN-FIRST:event_ds22OnRequeried
        Logger.info("ds22OnRequeried");
}//GEN-LAST:event_ds22OnRequeried

function ds22OnFiltered(evt) {//GEN-FIRST:event_ds22OnFiltered
        Logger.info("ds22OnFiltered");
}//GEN-LAST:event_ds22OnFiltered

function ds31OnRequeried(evt) {//GEN-FIRST:event_ds31OnRequeried
        Logger.info("ds31OnRequeried");
}//GEN-LAST:event_ds31OnRequeried

function ds31OnFiltered(evt) {//GEN-FIRST:event_ds31OnFiltered
        Logger.info("ds31OnFiltered");
}//GEN-LAST:event_ds31OnFiltered

function ds32OnRequeried(evt) {//GEN-FIRST:event_ds32OnRequeried
        Logger.info("ds32OnRequeried");
}//GEN-LAST:event_ds32OnRequeried

function ds32OnFiltered(evt) {//GEN-FIRST:event_ds32OnFiltered
        Logger.info("ds32OnFiltered");
}//GEN-LAST:event_ds32OnFiltered

function ds33OnRequeried(evt) {//GEN-FIRST:event_ds33OnRequeried
        Logger.info("ds33OnRequeried");
}//GEN-LAST:event_ds33OnRequeried

function ds33OnFiltered(evt) {//GEN-FIRST:event_ds33OnFiltered
        Logger.info("ds33OnFiltered");
}//GEN-LAST:event_ds33OnFiltered

function ds41OnFiltered(evt) {//GEN-FIRST:event_ds41OnFiltered
        Logger.info("ds41OnFiltered");
}//GEN-LAST:event_ds41OnFiltered

function ds41OnRequeried(evt) {//GEN-FIRST:event_ds41OnRequeried
        Logger.info("ds41OnRequeried");
}//GEN-LAST:event_ds41OnRequeried

function btnModelRequeryActionPerformed(evt) {//GEN-FIRST:event_btnModelRequeryActionPerformed
        self.model.requery(function() {
            Logger.info("model.requery succeded");
        }, function(aError) {
            Logger.info("model.requery failed: " + aError);
        });
        //Logger.info("model.requery succeded");    
}//GEN-LAST:event_btnModelRequeryActionPerformed

function btnRequery1ActionPerformed(evt) {//GEN-FIRST:event_btnRequery1ActionPerformed
}//GEN-LAST:event_btnRequery1ActionPerformed

function btnEntityRequeryActionPerformed(evt) {//GEN-FIRST:event_btnEntityRequeryActionPerformed
        self.ds21.requery(function() {
            Logger.info("ds21.requery Succeded");
        }, function(aError) {
            Logger.info("ds21.requery Failed: " + aError);
        });
        //Logger.info("ds21.requery Succeded");
}//GEN-LAST:event_btnEntityRequeryActionPerformed

function btnModelExecuteActionPerformed(evt) {//GEN-FIRST:event_btnModelExecuteActionPerformed
        self.model.execute(function() {
            Logger.info("model.execute succeded");
        }, function(aError) {
            Logger.info("model.execute failed: " + aError);
        });
}//GEN-LAST:event_btnModelExecuteActionPerformed

function btnEntityExecuteActionPerformed(evt) {//GEN-FIRST:event_btnEntityExecuteActionPerformed
        self.ds21.execute(function() {
            Logger.info("ds21.execute Succeded");
        }, function(aError) {
            Logger.info("ds21.execute Failed: " + aError);
        });
}//GEN-LAST:event_btnEntityExecuteActionPerformed

}