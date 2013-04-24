/**
 * 
 * @author mg
 * @name TextsTest
 * @rolesAllowed role1
 */

params.md.Param0.pk = true;

function btnSetValueActionPerformed(evt) {//GEN-FIRST:event_btnSetValueActionPerformed
    formattedField.value = "258-6454";//new Date();
    modelText.value = formattedField.value;
    var e = evt;
}//GEN-LAST:event_btnSetValueActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
    modelText.value = formattedField.value;
}//GEN-LAST:event_buttonActionPerformed

function btnSetParamsActionPerformed(evt) {//GEN-FIRST:event_btnSetParamsActionPerformed
    params.Param1 = new Date();
    params.Param2 = "789-9876";
    params.Param3 = 91;
}//GEN-LAST:event_btnSetParamsActionPerformed

function btnSetSelectorsActionPerformed(evt) {//GEN-FIRST:event_btnSetSelectorsActionPerformed
    modelGrid.columnDate.onSelect = function(aEditor){
        aEditor.value = new Date();
    };
    var n=0;
    modelGrid.columnMask.onSelect = function(aEditor){
        aEditor.value = "456-885"+(++n);
    };
    
    modelGrid.columnNumber.onSelect = function(aEditor){
        aEditor.value++;
    };
    
    modelGrid.columnPercent.onSelect = function(aEditor){
        aEditor.value++;
    };
    
    modelGrid.columnCurrency.onSelect = function(aEditor){
        aEditor.value++;
    };    
}//GEN-LAST:event_btnSetSelectorsActionPerformed

function btnCreateFormattedFieldActionPerformed(evt) {//GEN-FIRST:event_btnCreateFormattedFieldActionPerformed
    var ff = new FormattedField("753-3579");
    //ff.value = new Date();
    ff.format += "###"
    view.add(ff, {"right":19, "top":45, "width":evt.source.width, "height":25});
}//GEN-LAST:event_btnCreateFormattedFieldActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
    modelText.format = null;
}//GEN-LAST:event_button1ActionPerformed
