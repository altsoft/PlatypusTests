/**
 * Platypus report script.
 * @public
 */

function TestReportCore() {
    var self = this, model = P.loadModel(this.constructor.name)
    , template = P.loadTemplate(this.constructor.name, model);
    
    self.getReport = function() {
        return template.generateReport();
    };
}