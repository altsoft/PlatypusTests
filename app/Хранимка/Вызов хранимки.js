/**
 * 
 * @author mg
 * @name ProcedureCallerView
 */

function ProcedureCallerView() {

    var self = this;

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        var caller = new ServerModule("StoredProcedureCaller");
        caller.achiveResult(20, 5, function(aResult) {
            alert(aResult);
        });
}//GEN-LAST:event_buttonActionPerformed

}