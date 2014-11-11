/**
 * 
 * @author mg
 */
function TestReportsView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };
    
    form.btnReportExecute.onActionPerformed = function (event) {
        var reportModule = new TestReportsModule();
        reportModule.execute();
    };
}
