/**
 * @name 125023404079675
*/
function dsGoods_beforeChange(field, oldValue, newValue)
{
	if(field == dsGoods.md.GOOD_ID)
	{
		warn('Первичные ключи нельзя править вручную!');
		return2EditingRow.invokeLater();
		return false;
	}
}

function return2EditingRow()
{
	dsGoods.first();
}

function btnNextActionPerformed(evt) {//GEN-FIRST:event_btnNextActionPerformed
	dsGoods.next();
}//GEN-LAST:event_btnNextActionPerformed
