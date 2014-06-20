/**
 * @name Маленькая
 */

function Маленькая() {

    var self = this;

function formWindowActivated(evt) {//GEN-FIRST:event_formWindowActivated
        Logger.info('Вызываемая форма, windowActivated');
}//GEN-LAST:event_formWindowActivated

function formWindowClosed(evt) {//GEN-FIRST:event_formWindowClosed
        Logger.info('Вызываемая форма, windowClosed');
}//GEN-LAST:event_formWindowClosed

function formWindowClosing(evt) {//GEN-FIRST:event_formWindowClosing
        Logger.info('Вызываемая форма, windowClosing');
        return confirm('Really self.close?');
}//GEN-LAST:event_formWindowClosing

function formWindowDeactivated(evt) {//GEN-FIRST:event_formWindowDeactivated
        Logger.info('Вызываемая форма, windowDeactivated');
}//GEN-LAST:event_formWindowDeactivated

function formWindowDeiconified(evt) {//GEN-FIRST:event_formWindowDeiconified
        Logger.info('Вызываемая форма, windowDeiconified');
}//GEN-LAST:event_formWindowDeiconified

function formWindowIconified(evt) {//GEN-FIRST:event_formWindowIconified
        Logger.info('Вызываемая форма, windowIconified');
}//GEN-LAST:event_formWindowIconified

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
        Logger.info('Вызываемая форма, windowOpened');
}//GEN-LAST:event_formWindowOpened

function btnCloseActionPerformed(evt) {//GEN-FIRST:event_btnCloseActionPerformed
        self.close();
}//GEN-LAST:event_btnCloseActionPerformed

}