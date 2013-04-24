/**
 * 
 * @author mg
 * @name ReportsAPI
 */

function btnShowServerReportActionPerformed(evt) {//GEN-FIRST:event_btnShowServerReportActionPerformed
    var sr = new ServerReport("TestServerReport");
    sr.Param1 = 45;
    sr.Param2 = "blah blah blah...";
    sr.show();
}//GEN-LAST:event_btnShowServerReportActionPerformed

function btnShowClientReportActionPerformed(evt) {//GEN-FIRST:event_btnShowClientReportActionPerformed
    var cr = new Report("TestClientReport");
    cr.Param1 = "... blah blah...";
    cr.Param2 = 55;
    cr.show();
}//GEN-LAST:event_btnShowClientReportActionPerformed

function btnCallServerModuleActionPerformed(evt) {//GEN-FIRST:event_btnCallServerModuleActionPerformed
    var sm = new ServerModule("TestServerModule");
    
    // Synchronous calls...
    Logger.info("sm.testSum(...) returned: " + sm.testSum(5, 10) );
    Logger.info("sm.testBoolean(...) returned: " + sm.testBoolean() );
    Logger.info("sm.testDate(...) returned: " + sm.testDate() );
    Logger.info("sm.testNull(...) returned: " + sm.testNull() );
    Logger.info("sm.testString(...) returned: " + sm.testString() );
    Logger.info("sm.testUndefined(...) returned: " + sm.testUndefined() );
    
    // Asynchronous calls...
    sm.testSum(5, 10, function(res){
        Logger.info("sm.testSum(...) returned: " + res);    
    });
    sm.testBoolean(function(res){
        Logger.info("sm.testBoolean(...) returned: " + res);
    });
    sm.testDate(function(res){
        Logger.info("sm.testDate(...) returned: " + res);
    });
    sm.testNull(function(res){
        Logger.info("sm.testNull(...) returned: " + res);
    });
    sm.testString(function(res){
        Logger.info("sm.testString(...) returned: " + res);
    });
    sm.testUndefined(function(res){
        Logger.info("sm.testUndefined(...) returned: " + res);
    });    
}//GEN-LAST:event_btnCallServerModuleActionPerformed
