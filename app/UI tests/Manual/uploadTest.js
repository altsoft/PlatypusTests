/**
 * 
 * @author mg
 * @name uploadTest
 */
function uploadTest() {

    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);

    self.show = function () {
        form.show();
    };

    var file;
    var loading;

    form.btnSelectFile.onActionPerformed = function (event) {
        P.selectFile(function (aFile) {
            file = aFile;
            P.Logger.info(file);
            form.lblFileName.text = file.name;
        },P.Logger.info("file"));
    };

    form.btnStartUpload.onActionPerformed = function (event) {
        if (loading == null) {
            if (file != null) {
                loading = upload(file,
                        function (aUrl) {
                            loading = null;
                            self.progressBar.value = 0;
                            self.progressBar.text = "";
                            alert("File is uploaded successfully and accessible at:\n" + aUrl);
                        },
                        function (aEvent) {
                            if (loading != null) {
                                self.progressBar.value = aEvent.loaded / aEvent.total * 100;
                                self.progressBar.text = self.progressBar.value + "%";
                            }
                        },
                        function (aError) {
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
    };

    form.btnAbort.onActionPerformed = function (event) {
        if (loading != null)
            loading.abort();
    };


}