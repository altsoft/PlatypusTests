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
        self.execute();
    };
    
    self.execute = function(){
        var reportModule = new TestReportsCore();
        reportModule.execute();
    };
}
