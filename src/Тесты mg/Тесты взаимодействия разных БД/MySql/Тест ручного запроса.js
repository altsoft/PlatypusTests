/**
 * @name 128654051192166
*/
const dbId = 128654065284309;
const sqlText = "select * from command_archive where id=:p1 or id=:p1+1 and id=:p2";
var Params = com.bearsoft.rowset.metadata.Parameters;
var Param = com.bearsoft.rowset.metadata.Parameter;
var DataTypeInfo = com.bearsoft.rowset.metadata.DataTypeInfo;

var query = null;
var params = null;
function checkQuery()
{
	if(query == null)
	{
		queryParams = new Params();
		var p1 = new Param("p1", null, DataTypeInfo.BIGINT);
		p1.value = 1;
		var p2 = new Param("p2", null, DataTypeInfo.BIGINT);
		p2.value = 1;
		queryParams.add(p1);
		queryParams.add(p2);
		query = model.createQuery(dbId, sqlText, queryParams);
		query.md.id.pk = true;
		gridMySql.fillByRowset(query);
		return true;
	}
	return false;
}

function btnRefresh_actionPerformed(ev)
{
	var loaded = checkQuery();
	if(!loaded)
	{
		query.requery();
	}
}