/**
 * 
 * @author mg
 * @name StoredProcedureCaller
 * @public
 * @stateless
 */
function StoredProcedureCaller() {

    var self = this;

    var d = 0;

    function achiveResult(aEmpId, aSalary) {
        self.procedureSample.params.emp_id = aEmpId;
        self.procedureSample.params.salary = aSalary;
        self.procedureSample.requery();
        return self.procedureSample.params.res + d++;
    }
}