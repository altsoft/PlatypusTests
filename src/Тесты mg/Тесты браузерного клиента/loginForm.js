/**
 * 
 * @author mg
 * @name LoginForm
 */

function validate() {
    txtPassword.error = txtPassword.text == null || txtPassword.text == "" ? "Password is required!" : null;
    txtUserName.error = txtUserName.text == null || txtUserName.text == "" ? "User name is required!" : null;
    return txtPassword.error == null && txtUserName.error == null;
}

function btnLoginActionPerformed(evt) {//GEN-FIRST:event_btnLoginActionPerformed
    if(validate()) {
        document.getElementById("txtusr").value = txtUserName.text;
        document.getElementById("txtpasswd").value = txtPassword.text;
        document.getElementById("btnsubmit").click();
    }
}//GEN-LAST:event_btnLoginActionPerformed

function txtPasswordKeyPressed(evt) {//GEN-FIRST:event_txtPasswordKeyPressed
    if(evt.key == VK_ENTER)
        btnLoginActionPerformed();
}//GEN-LAST:event_txtPasswordKeyPressed

function txtUserNameKeyPressed(evt) {//GEN-FIRST:event_txtUserNameKeyPressed
    if(evt.key == VK_ENTER)
        btnLoginActionPerformed();
}//GEN-LAST:event_txtUserNameKeyPressed
