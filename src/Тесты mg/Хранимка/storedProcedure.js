/**
 * 
 * @author mg
 * @name StoredProcedureCaller
 * @public
 * @stateless
 */

var d = 0;

function achiveResult(aEmpId, aSalary){
    procedureSample.params.emp_id = aEmpId;
    procedureSample.params.salary = aSalary;
    procedureSample.requery();
    return procedureSample.params.res + d++;
}