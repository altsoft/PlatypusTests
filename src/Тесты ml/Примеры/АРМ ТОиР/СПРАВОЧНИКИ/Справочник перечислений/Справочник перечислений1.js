/**
 * @name 124929541023460
*/
var REPORT_ID = 124876838492163184,
            Filter_Form_ID = 124904892981268;
            
var filter = null;

function btnAdd_onClick(ev)
{
	dsEnumerations.insertSingleRow(dsEnumerations.md.ISGROUP, 1);	
}

function btnAddChild_onClick(ev)
{
	if (dsEnumerations.size > 0 && dsEnumerations.ID > 0 && dsEnumerations.ID != null )
	{
		if (dsEnumerations.ISGROUP == 1)
		{ 
// способ вставки записей № 1
//      dsEnumerations.insertSingleRow(dsEnumerations.md.ISGROUP, 0, dsEnumerations.md.GROUP_ID, dsEnumerations.ID);

// способ вставки записей № 2
			var gId = dsEnumerations.ID;
			try
			{
				dsEnumerations.beginInsert();
				dsEnumerations.ISGROUP = 0;
				dsEnumerations.GROUP_ID = gId;
				dsEnumerations.insertRow();	
				dsEnumerations.endInsert();
			}
			catch (e)
			{
				error(e, "Ошибка.");
			}	
		}
		else
			warn("Значения перечисления можно добавлять только в группу!","Предупреждение");
	} 
	else 
		warn("Не определена группа перечисления.","Предупреждение");
}

function btnDelete_onClick(ev)
{
	if (dsEnumerations.size > 0)
               	dsEnumerations.deleteRow()
	else
		warn("Нет записей для удаления.","Предупреждение");
}

function btnRefresh_onClick(ev)
{
	dsEnumerations.requery();	
}

function btnSave_onClick(ev)
{
	dsEnumerations.save();	
}

function btnFind_onClick(ev)
{
	alert(form.getLocation());
}

function btnPrint_onClick(ev)
{
	var reportRunner = new com.eas.client.reports.engine.ReportRunner(REPORT_ID);
// здесь вставить присвоение значения параметру формы
	reportRunner.show();	
}

function btnSetFilter_onClick(ev)
{
	var FilterFormRunner = new com.eas.client.forms.FormRunner(Filter_Form_ID);

//	var frame = FilterFormRunner.getFrame();
//	frame.title = "Фильтр по группе перечисления";	
	var mr = FilterFormRunner.showModal(null);
	if (mr == ok)
	{
		var newFilterValue = FilterFormRunner.dsEnumGroups.ID;
		setNewFilter(newFilterValue);
	}
}

function setNewFilter(aNewFilterValue)
{
	if (filter == null)
		filter = dsEnumerations.createFilter(dsEnumerations.md.GROUP_ID);	
	filter.filterRowset(aNewFilterValue);
}

function btnDeleteFilter_onClick(ev)
{
	if (filter != null)
		filter.cancelFilter();
}