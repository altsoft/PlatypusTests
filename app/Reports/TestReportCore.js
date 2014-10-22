/**
 * Platypus report script.
 * @public
 */
function TestReportCore() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    self.getReport = function() {
        var template = P.loadTemplate(this.constructor.name, {model: model, name: "test"});
        return template.generateReport();
    };
    
    model.requery();
}