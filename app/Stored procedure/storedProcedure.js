/**
 * 
 * @author mg
 * @name StoredProcedureCaller
 * @public
 * @stateless
 */
function StoredProcedureCaller() {

    var self = this, model = P.loadModel(this.constructor.name);

    self.achiveProcedureResult = function (aEmpId, aSalary) {
        model.procedureSample.params.emp_id = aEmpId;
        model.procedureSample.params.salary = aSalary;
        model.procedureSample.requery();
        return model.procedureSample.params.res;
    };
    
    self.achiveFunctionResult = function (aFirst, aSecond) {
        model.storedFunctionTest.params.first = aFirst;
        model.storedFunctionTest.params.second = aSecond;
        model.storedFunctionTest.requery();
        return model.storedFunctionTest.cursor.res;
    };
}