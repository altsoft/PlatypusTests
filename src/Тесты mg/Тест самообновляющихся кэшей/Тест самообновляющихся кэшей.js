/*
 * Тест самообновляющихся кэшей.js
 *
 * Created on 23.03.2012, 11:58:07
 */

/**
 *
 * @name 133248948736614
 * @author mg
 */

var sessionModule = new ServerModule('133249100633764');
var residentModule = new ServerModule('task');

function btnModuleCreateActionPerformed(evt) {//GEN-FIRST:event_btnModuleCreateActionPerformed
    var m = new Module(133248983871404);
}//GEN-LAST:event_btnModuleCreateActionPerformed

function btnModuleGetActionPerformed(evt) {//GEN-FIRST:event_btnModuleGetActionPerformed
    var m = Modules.get(133248987275482);
}//GEN-LAST:event_btnModuleGetActionPerformed

function btnFormCreateActionPerformed(evt) {//GEN-FIRST:event_btnFormCreateActionPerformed
    var f = new Form(133248991361047);
}//GEN-LAST:event_btnFormCreateActionPerformed

function btnReportCreateActionPerformed(evt) {//GEN-FIRST:event_btnReportCreateActionPerformed
    var r = new Report(133248992605961);
}//GEN-LAST:event_btnReportCreateActionPerformed

function btnCallSessionModuleActionPerformed(evt) {//GEN-FIRST:event_btnCallSessionModuleActionPerformed
    alert(sessionModule.testMethod(), form.title);
}//GEN-LAST:event_btnCallSessionModuleActionPerformed

function btnCallResidentModuleActionPerformed(evt) {//GEN-FIRST:event_btnCallResidentModuleActionPerformed
    alert(residentModule.testMethod(), form.title);
}//GEN-LAST:event_btnCallResidentModuleActionPerformed

function btnCallResidentModuleGetActionPerformed(evt) {//GEN-FIRST:event_btnCallResidentModuleGetActionPerformed
    residentModule.testModuleGet();
}//GEN-LAST:event_btnCallResidentModuleGetActionPerformed

function btnCallResidentModuleCreateActionPerformed(evt) {//GEN-FIRST:event_btnCallResidentModuleCreateActionPerformed
    residentModule.testModuleCreate();
}//GEN-LAST:event_btnCallResidentModuleCreateActionPerformed
