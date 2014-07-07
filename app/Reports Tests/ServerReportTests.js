/**
 * 
 * @author Andrew
 * @module
 */ 
function ServerReportTests() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    var reportModule = new P.ServerModule("TestReportCore"); 
    var report = reportModule.getReport();
    if (!report) {
        throw "Report does not return from server module."
    }
    report.save("C:\\1.xls");
    var File = Java.type("java.io.File");
    var f = new File("C:\\1.xls");
    if (!f.exists()) {
        throw "File not found."
    }
}
