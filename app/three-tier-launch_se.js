/**
 * 
 * @author mg
 */
function ThreeTierSELauncher() {
    var self = this
            , form = P.loadForm(this.constructor.name);

    self.show = function () {
        form.show();
    };

    form.onWindowClosed = function (ev) {
        exit();
    };

    form.btnRun.onActionPerformed = function (event) {

        var tests = [
                       new select_stateless_test()
                     , new append_test()
                     , new ambigous_changes_semi_writable()
                     , new ambigous_changes()
                     , new extra_fields_insert_update()
                     , new ModelModyfiedTestClient()
                     , new SqlUpdateTestClient()
                     , new DependenciesTest()
                     , new ParallelRequire()
                     , new CreateEntityTestClient()
                     , new LoadEntityTestClient()
                     , new ModelAPI()
                     , new MultiSourceTest()
                     , new MultiSourceWithErrorTest()
                     , new ORM_Relations_Test()
                     , new ORM_properties_names_calc()
                     , new TestReportCore()
                     , new TestReportClient()
                     , new IconLoadTest()
                     , new ResourceLoadTest()
                     , new FontsDataTest()
                     , new StoredProcedureTestClient()
                     , new SecureServerModulesClient()
                     , new SecureDataSourcesTest()
                     , new SyncServerModulesTest()
                     , new AsyncServerModulesTest()
>>>>>>> origin/master
        ];
        form.progress.minimum = 0;
        form.progress.maximum = tests.length;
        form.btnRun.enabled = false;
        form.progress.value = 0;
        form.txtLog.text = '';
        var testidx = 0;
        function performTest() {
            if (testidx < tests.length) {
                var test = tests[testidx];
                test.execute(function () {
                    form.progress.value++;
                    var msg = test.constructor.name + " - passed";
                    if (form.txtLog.text)
                        form.txtLog.text += '\n';
                    form.txtLog.text += msg;
                    P.Logger.info(msg);
                    testidx++;
                    performTest();
                });
            } else {
                form.btnRun.enabled = true;
            }
        }
        performTest();
    };
}
