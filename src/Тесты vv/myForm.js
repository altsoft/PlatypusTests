/**
 *
 * @name 131479783889259
 * @author vv
 */
var test = java.lang.Math.PI;
label.text = '***';

 function myFunction() {               
     label.text = dbCheck1.isSelected() ? 'Hello world!' : test;
 }
  
 
function btnFillActionPerformed(evt) {//GEN-FIRST:event_btnFillActionPerformed
    for (var i=0;i<1000;i++) {
        ds_myTest.insert(ds_myTest.md.VAL, i);  
    }
}//GEN-LAST:event_btnFillActionPerformed

function btnClearActionPerformed(evt) {//GEN-FIRST:event_btnClearActionPerformed
	ds_myTest.deleteAllRows();
}//GEN-LAST:event_btnClearActionPerformed

function dbGrid1MouseWheelMoved(evt) {//GEN-FIRST:event_dbGrid1MouseWheelMoved
    Logger.info(evt);
    evt.consume();
}//GEN-LAST:event_dbGrid1MouseWheelMoved


function jButton1ActionPerformed(evt) {//GEN-FIRST:event_jButton1ActionPerformed
	setThreadPoolSize(3);
        Logger.info('thread size: ' + THREAD_POOL_SIZE);
        testRunInThread.invokeBackground(50);
}//GEN-LAST:event_jButton1ActionPerformed

function jButton2ActionPerformed(evt) {//GEN-FIRST:event_jButton2ActionPerformed
	var newForm = new Form(131479783889259);
        newForm.show();
}//GEN-LAST:event_jButton2ActionPerformed

function btnRunExcelActionPerformed(evt) {//GEN-FIRST:event_btnRunExcelActionPerformed
	var session = new ComSession('', 'admin', 'admin');
        var excel = session.createObject('Excel.Application', '192.168.56.111');
        excel.Visible = true;
        Logger.info('excel.Visible >> ' + excel.Visible());
        excel.Workbooks().Add();
        session.destroy();
        
}//GEN-LAST:event_btnRunExcelActionPerformed

 function callStackItemFunction1() {               
     callStackItemFunction2();
 }

 function callStackItemFunction2() {               
     //do something..
     var str = 'aValue';
 }
 
 function testRunInThread(count) {
     for (var i=0;i<count;i++) {
         Logger.info('testRunInThread: ' + i);
         (function () {lblCount.text = i;}).invokeLater();
         Thread.sleep(500);
         if (!form.visible) {
             break;
         }
     }
 }

