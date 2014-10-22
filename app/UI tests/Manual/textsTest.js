/**
 * 
 * @author mg
 * @name TextsTest
 * @rolesAllowed role1
 */

function TextsTest() {

    var self = this;

    params.md.Param0.pk = true;

function btnSetValueActionPerformed(evt) {//GEN-FIRST:event_btnSetValueActionPerformed
        self.formattedField.value = "258-6454";//new Date();
        self.modelText.value = self.formattedField.value;
        var e = evt;
}//GEN-LAST:event_btnSetValueActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        self.modelText.value = self.formattedField.value;
}//GEN-LAST:event_buttonActionPerformed

function btnSetParamsActionPerformed(evt) {//GEN-FIRST:event_btnSetParamsActionPerformed
        params.Param1 = new Date();
        params.Param2 = "789-9876";
        params.Param3 = 91;
}//GEN-LAST:event_btnSetParamsActionPerformed

function btnSetSelectorsActionPerformed(evt) {//GEN-FIRST:event_btnSetSelectorsActionPerformed
        self.modelGrid.columnDate.onSelect = function(aEditor) {
            aEditor.value = new Date();
        };
        var n = 0;
        self.modelGrid.columnMask.onSelect = function(aEditor) {
            aEditor.value = "456-885" + (++n);
        };

        self.modelGrid.columnNumber.onSelect = function(aEditor) {
            aEditor.value++;
        };

        self.modelGrid.columnPercent.onSelect = function(aEditor) {
            aEditor.value++;
        };

        self.modelGrid.columnCurrency.onSelect = function(aEditor) {
            aEditor.value++;
        };
}//GEN-LAST:event_btnSetSelectorsActionPerformed

function btnCreateFormattedFieldActionPerformed(evt) {//GEN-FIRST:event_btnCreateFormattedFieldActionPerformed
        var ff = new FormattedField("753-3579");
        //ff.value = new Date();
        ff.format += "###"
        self.view.add(ff, {"right": 19, "top": 45, "width": evt.source.width, "height": 25});
}//GEN-LAST:event_btnCreateFormattedFieldActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
        self.modelText.format = null;
}//GEN-LAST:event_button1ActionPerformed

}