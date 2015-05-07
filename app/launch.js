/**
 * 
 * @author mg
 * @rolesAllowed role1
 */
function Launcher() {
    var self = this
            , form = P.loadForm(this.constructor.name);

    self.show = function () {
        form.show();
    };

    var tests = [
        new ambigous_changes_semi_writable()
                , new ambigous_changes()
                , new extra_fields_insert_update()
                , new SqlUpdateTestClient()
                , new Dependent()
                , new InheritanceTest()
                //, new Login_Logout_Test_View()
                , new CreateEntityTestClient()
                , new Load_Entity_Test()
                , new ModelAPI()
                , new ModelModyfiedTest()
                , new MultiSourceTestView()
                , new MultiSourceWithErrorTestView()
                , new ORM_Relations_Test()
                , new ORM_properties_names_calc()
                , new TestReportsView()
                , new Icon_load()
                , new Resource_load()
                , new FontsDataTest()
                , new FontsDataValidatorTest()
                , new SecureServerModuleView()
                , new SecureResource()
                , new SecureDataSources()
                , new ServerModuleTests()
                , new AsyncServerModuleTests()
                , new ProcedureCallerView()
    ];

    if(P.agent === P.HTML5)
        tests[tests.length] = new HttpContextTestView();

    form.progress.minimum = 0;
    form.progress.maximum = tests.length;

    form.btnRun.onActionPerformed = function (event) {
        tests.forEach(function (aTest) {
            try {
                aTest.execute();
                form.progress.value++;
            } catch (e) {
                P.Logger.severe(e);
            }
        });
    };
}
