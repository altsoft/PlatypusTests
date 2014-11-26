/**
 * 
 * @author mg
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
                //, new SqlUpdateTest
                , new Dependent()
                //, new TestHttpContext()
                , new InheritanceTest()
                //, new Login_Logout_Test_View()
                //, new Create_Entity_Test()
                , new LoadEntityTest()
                , new ModelAPI()
                , new MultiSourceTestView()
                , new MultiSourceWithErrorTestView()
                , new ORM_Relations_Test()
                , new ORM_properties_names_calc()
                ,
                ,
                ,
                ,
    ];

    form.btnRun.onActionPerformed = function (event) {

    };
}
