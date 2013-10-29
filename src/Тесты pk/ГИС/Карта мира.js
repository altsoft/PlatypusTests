/**
 * @name 126105722210448
*/
var MapActions = JavaImporter(org.geotools.swing.action);
var EPSGFactory = org.geotools.referencing.crs.EPSGCRSAuthorityFactory.getDefault();

function btnRefresh_onClick(ev)
{
	model.requery();
}

function windowOpened(ev)
{
	btnZoomIn.setAction(new MapActions.ZoomInAction(mapControl.mapPane));
	btnZoomOut.setAction(new MapActions.ZoomOutAction(mapControl.mapPane));
	btnPan.setAction(new MapActions.PanAction(mapControl.mapPane));
	//btnInfo.setAction(new MapActions.InfoAction(mapPane));
}


function btnSetCRS_actionPerformed(ev)
{
	var newCrs = EPSGFactory.createProjectedCRS(tfCRS.text);
	mapControl.mapPane.mapContext.coordinateReferenceSystem = newCrs;
}