/**
 * @name 124869931200036384
*/
const REPORT_ID = 124876838492163184,
            Filter_Form_ID = 124904892981268;

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
			var gId = dsEnumerations.ID;
			dsEnumerations.beginInsert();
			try
			{
				dsEnumerations.ISGROUP = 0;
				dsEnumerations.GROUP_ID = gId;
				dsEnumerations.insertRow();	
			}
			finally
			{
				dsEnumerations.endInsert();
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
}

function btnPrint_onClick(ev)
{
// Запуск отчета на просмотр
	var newReportRunner = new com.eas.client.reports.engine.ReportRunner(REPORT_ID);
	newReportRunner.show();	
//Сохранение отчета в файл
	var rptFormat = newReportRunner.xls;
//	alert(rptFormat);
	var rptPath = "C:/myReport.xls";
	//newReportRunner.writeTo(rptPath, rptFormat);
	alert("Файл отчета успешно сохранен.", "Сообщение");
}

function btnSetFilter_onClick(ev)
{
	var mr = showFormAsModal(Filter_Form_ID,  "Фильтр по группе перечисления");
	if (mr == ok)
		setNewFilter(gFormRunner.dsEnumGroups.ID);
//	setNewFilter("Статус");
}

var filter = null;
function setNewFilter(aNewFilterValue)
{
	if (aNewFilterValue != null  && aNewFilterValue != undefined)
	{
		if (filter == null)
			filter = dsEnumerations.createFilter(dsEnumerations.md.GROUP_ID);	
//			filter = dsEnumerations.createFilter(dsEnumerations.md.NAME);	
		filter.apply(aNewFilterValue);
	}	
}

function btnDeleteFilter_onClick(ev)
{
	if (filter != null)
		filter.cancel();
}



function showForm(aFormId, aFormTitle)
{
	if (aFormId != undefined && aFormId != null && aFormId > 0)
	{
		lFormRunner = new FormRunner(aFormId);
		lFormRunner.show();
		if (aFormTitle != undefined && aFormTitle != null)
			lFormRunner.form.title = aFormTitle
		else
			lFormRunner.form.title = "";		
		
	}
}

var gFormRunner = null;
function showFormAsModal(aFormId, aFormTitle)
{
	var result = false;
	if (aFormId != undefined && aFormId != null && aFormId > 0)
	{
		gFormRunner = new FormRunner(aFormId);
		var frame = gFormRunner.getDialog(null);
		if (aFormTitle != undefined && aFormTitle != null)
			frame.title = aFormTitle
		else
			frame.title = "";		
		result = gFormRunner.showModal(null);
	}
	return result;
}