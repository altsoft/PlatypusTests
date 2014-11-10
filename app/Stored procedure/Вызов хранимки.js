/**
 * 
 * @author mg
 * @name ProcedureCallerView
 */

function ProcedureCallerView() {

    var self = this, model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };


    model.requery(function () {
    });

    form.btnCall.onActionPerformed = function (evt) {
        var caller = new P.ServerModule("StoredProcedureCaller");
        caller.achiveProcedureResult(20, 5, function (aResult) {
            if (aResult != 25) {
                throw "Error calling stored procedure.";
            }
        });
        caller.achiveFunctionResult(20, 5, function (aResult) {
            if (aResult != 25) {
                throw "Error calling stored procedure.";
            }
        });
    };
}