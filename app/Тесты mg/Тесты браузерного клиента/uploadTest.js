/**
 * 
 * @author mg
 * @name UploadTest
 */
function UploadTest() {

    var self = this;


    var file;
    var loading;

function btnSelectFileActionPerformed(evt) {//GEN-FIRST:event_btnSelectFileActionPerformed
        selectFile(function(aFile) {
            file = aFile;
            self.lblFileName.text = file.name;
        });
}//GEN-LAST:event_btnSelectFileActionPerformed

function btnStartUploadActionPerformed(evt) {//GEN-FIRST:event_btnStartUploadActionPerformed
        if (loading == null) {
            if (file != null) {
                loading = upload(file,
                        function(aUrl) {
                            loading = null;
                            self.progressBar.value = 0;
                            self.progressBar.text = "";
                            alert("File is uploaded successfully and accessible at:\n" + aUrl);
                        },
                        function(aEvent) {
                            if (loading != null) {
                                self.progressBar.value = aEvent.loaded / aEvent.total * 100;
                                self.progressBar.text = self.progressBar.value + "%";
                            }
                        },
                        function(aError) {
                            loading = null;
                            self.progressBar.value = 0;
                            self.progressBar.text = "";
                            alert("Uploading is aborted with message: " + aError);
                        }
                );
            } else
                alert("Select a file please...");
        } else
            alert("Wait please while current upload ends!");
}//GEN-LAST:event_btnStartUploadActionPerformed

function btnAbortActionPerformed(evt) {//GEN-FIRST:event_btnAbortActionPerformed
        if (loading != null)
            loading.abort();
}//GEN-LAST:event_btnAbortActionPerformed

}