/**
 * 
 * @author mg
 * @name UploadTest
 */

var file;
var loading;

function btnSelectFileActionPerformed(evt) {//GEN-FIRST:event_btnSelectFileActionPerformed
    selectFile(function(aFile){
        file = aFile;
        lblFileName.text = file.name;
    });
}//GEN-LAST:event_btnSelectFileActionPerformed

function btnStartUploadActionPerformed(evt) {//GEN-FIRST:event_btnStartUploadActionPerformed
    if(loading == null) {
        if(file != null){
            loading = upload(file,
                function(aUrl){
                    loading = null;
                    progressBar.value = 0;
                    progressBar.text = "";
                    alert("File is uploaded successfully and accessible at:\n"+aUrl);
                },
                function(aEvent){
                    if(loading != null){
                        progressBar.value = aEvent.loaded/aEvent.total*100;
                        progressBar.text = progressBar.value+"%";
                    }
                },
                function(aError){
                    loading = null;
                    progressBar.value = 0;
                    progressBar.text = "";
                    alert("Uploading is aborted with message: "+aError);
                }
                );
        } else
            alert("Select a file please...");
    } else
        alert("Wait please while current upload ends!");
}//GEN-LAST:event_btnStartUploadActionPerformed

function btnAbortActionPerformed(evt) {//GEN-FIRST:event_btnAbortActionPerformed
    if(loading != null)
        loading.abort();
}//GEN-LAST:event_btnAbortActionPerformed
