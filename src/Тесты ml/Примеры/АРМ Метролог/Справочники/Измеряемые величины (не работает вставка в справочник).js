/**
 * @name 124766266298410384
*/
function btnAddMeasurand_onClick(ev)
{
	dsMeasurands.insertSingleRow();	
}

function btnDeleteMeasurand_onClick(ev)
{

	if (dsMeasurands.ID!=null && dsMeasurands.ID>0)
	{
		if (confirm("Удалить запись?", "Сообщение"))
			dsMeasurands.deleteRow();
	}
	else
		warn("Нет записей для удаления!");
		
}

function btnRefreshMeasurands_onClick(ev)
{
	dsMeasurands.requery();	
}

function btnSaveMeasurands_onClick(ev)
{
	dsMeasurands.save();	
}

function btnAddUnit_onClick(ev)
{
	if (dsMeasurands.ID!=null && dsMeasurands.ID>0)
	{
		dsUnits.insertSingleRow();
		dsUnits.MEASURAND = dsMeasurands.ID;
	}
	else
		warn("Сначала добавьте записи в таблицу 'Измеряемые величины'!", "Сообщение");
}

function btnDeleteUnit_onClick(ev)
{
	if (dsUnits.ID!=null && dsUnits.ID>0)
	{

		if (confirm("Удалить запись?", "Сообщение"))
			dsUnits.deleteRow();
	}
	else
		warn("Нет записей для удаления!", "Сообщение");	
}

function btnRefreshUnits_onClick(ev)
{
	dsUnits.requery();	
}

function btnSaveUnits_onClick(ev)
{
	dsUnits.save();	
}

function btnSaveMeasurands_onClick1(ev)
{
	
}