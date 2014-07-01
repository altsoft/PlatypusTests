/**
 * 
 * @author mg
 * @name BoxTest
 */

function BoxTest() {

    var self = this;


function btnAddButtonActionPerformed(evt) {//GEN-FIRST:event_btnAddButtonActionPerformed
        self.pnlBox.add(new Button("Sample button", null, function(evt) {
            evt.source.parent.remove(evt.source);
        }));
}//GEN-LAST:event_btnAddButtonActionPerformed

function btnAddTextFieldActionPerformed(evt) {//GEN-FIRST:event_btnAddTextFieldActionPerformed
        self.pnlBox.add(new TextField("Sample text"));
}//GEN-LAST:event_btnAddTextFieldActionPerformed

function btnAddTextAreaActionPerformed(evt) {//GEN-FIRST:event_btnAddTextAreaActionPerformed
        self.pnlBox.add(new TextArea("Sample area"));
}//GEN-LAST:event_btnAddTextAreaActionPerformed

function btnClearActionPerformed(evt) {//GEN-FIRST:event_btnClearActionPerformed
        self.pnlBox.clear();
}//GEN-LAST:event_btnClearActionPerformed

function btnIncSizeActionPerformed(evt) {//GEN-FIRST:event_btnIncSizeActionPerformed
        if (self.pnlBox.orientation == Orientation.HORIZONTAL)
            self.pnlBox.children[1].width += 20;
        else
            self.pnlBox.children[1].height += 20;
}//GEN-LAST:event_btnIncSizeActionPerformed

function btnDecSizeActionPerformed(evt) {//GEN-FIRST:event_btnDecSizeActionPerformed
        if (self.pnlBox.orientation == Orientation.HORIZONTAL)
            self.pnlBox.children[1].width -= 20;
        else
            self.pnlBox.children[1].height -= 20;
}//GEN-LAST:event_btnDecSizeActionPerformed

}