/**
 * 
 * @author mg
 * @name BoxTest
 */

function btnAddButtonActionPerformed(evt) {//GEN-FIRST:event_btnAddButtonActionPerformed
    pnlBox.add(new Button("Sample button", null, function(evt){
        evt.source.parent.remove(evt.source);
    }));
}//GEN-LAST:event_btnAddButtonActionPerformed

function btnAddTextFieldActionPerformed(evt) {//GEN-FIRST:event_btnAddTextFieldActionPerformed
    pnlBox.add(new TextField("Sample text"));
}//GEN-LAST:event_btnAddTextFieldActionPerformed

function btnAddTextAreaActionPerformed(evt) {//GEN-FIRST:event_btnAddTextAreaActionPerformed
    pnlBox.add(new TextArea("Sample area"));
}//GEN-LAST:event_btnAddTextAreaActionPerformed

function btnClearActionPerformed(evt) {//GEN-FIRST:event_btnClearActionPerformed
    pnlBox.clear();
}//GEN-LAST:event_btnClearActionPerformed

function btnIncSizeActionPerformed(evt) {//GEN-FIRST:event_btnIncSizeActionPerformed
    if(pnlBox.orientation == Orientation.HORIZONTAL)
        pnlBox.children[1].width += 20;
    else
        pnlBox.children[1].height += 20;
}//GEN-LAST:event_btnIncSizeActionPerformed

function btnDecSizeActionPerformed(evt) {//GEN-FIRST:event_btnDecSizeActionPerformed
    if(pnlBox.orientation == Orientation.HORIZONTAL)
        pnlBox.children[1].width -= 20;
    else
        pnlBox.children[1].height -= 20;
}//GEN-LAST:event_btnDecSizeActionPerformed
