/**
 * 
 * @author mg
 */
function TestReportsView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function() {
        form.show();
    };

    form.btnReportExecute.onActionPerformed = function(event) {
        var reportModule = new P.ServerModule("TestReportCore");
        reportModule.getReport(function(report) {
            if (report) {
                report.print();
            } else {
                throw "Report does not return from server module."
            }
        });
    };
    form.btnTwoTierReportExecute.onActionPerformed = function(event) {
        var r = new TestReportCore();
        r.getReport().show();
    };
}
