/**
 * @name 126779515285139
*/
const MapActions = JavaImporter(org.geotools.swing.action, com.eas.dbcontrols.map);
const JTS = JavaImporter(com.vividsolutions.jts.geom);
const MAX_DETALIZATION_LEVEL = 50000; // in meters, because projected features measure coordinates in meters.

//these will be initialized lazily.
var coordinatesTransform = null,
	coordinateOperationFactory = null;

parForest = "forest";
parWater = "water";
parX1=0;
parY1=0;
parX2=0;
parY2=0;

function btnRefresh_onClick(ev)
{
	model.requery();
}

function windowOpened(ev)
{
	btnSelect.setAction(new MapActions.DbMapSelectAction(mapControl));
	btnZoomIn.setAction(new MapActions.DbMapZoomInAction(mapControl));
	btnZoomOut.setAction(new MapActions.DbMapZoomOutAction(mapControl));
	btnPan.setAction(new MapActions.DbMapPanAction(mapControl));
	//btnInfo.setAction(new MapActions.InfoAction(mapPane));
}


function mapControl_onMapEvent(e)
{
	/* In the complex condition below only one condition is strictly required.
	Comparing to the EVENT_TYPE constant is more convenient for switch()-es,
	instanceof is more convenient for if-then-else-es. */
	if (e.type == MapActions.ZoomingEvent.EVENT_TYPE &&
		e instanceof MapActions.ZoomingEvent)
	{
		/* TODO tune the zoom factor parameter to select features with
		appropriate detalisation. */
		// The following demonstrates available properties of the ZoomingEvent object:
		var str = "The zooming event properties:\n  visibleRect = "+e.visibleRect+"\n"; // java.awt.Rectangle
		str += "  oldDisplayArea = "+e.oldDisplayArea+"\n"; // org.geotools.geometry.jts.ReferencedEnvelope
		str += "  newDisplayArea = "+e.newDisplayArea+"\n"; // org.geotools.geometry.jts.ReferencedEnvelope
		Logger.info(str);
		updateMapDetalization(e);
	}
	else if (e.type == MapActions.PanningEvent.EVENT_TYPE &&
		e instanceof MapActions.PanningEvent)
	{
		// The following demonstrates available properties of the PanningEvent object:
		var str = "The panning event properties:\n";
		str += "  oldDisplayArea = "+e.oldDisplayArea+"\n"; // org.geotools.geometry.jts.ReferencedEnvelope
		str += "  newDisplayArea = "+e.newDisplayArea+"\n"; // org.geotools.geometry.jts.ReferencedEnvelope
		Logger.info(str);
	}
	else if (e.type == MapActions.SelectionEvent.EVENT_TYPE &&
		e instanceof MapActions.SelectionEvent)
	{
		// The following demonstrates available properties of the SelectionEvent object.
		var str = "The selection event properties:\n";
		str += "  mapPosition = "+e.mapMouseEvent.mapPosition+"\n"; // org.geotools.swing.event.MapMouseEvent
		var transformedMapPosition = convertToGeographicCRS(e.mapMouseEvent.mapPosition);
		str += "  Transformed mapPosition = "+transformedMapPosition+"\n";
		// TODO Search thru features to find a collection which lyes around the converted mapPosition
		var roadsNearby = findFeaturesNearPosition("Дороги Делавера", "THE_GEOM", transformedMapPosition, 5e-4, "degrees");
		str += "  Features collection = " + resultsToString(roadsNearby) + "\n";
		var closestRoad = getClosestFeature(roadsNearby, transformedMapPosition);
		str += "  Closest feature = " + closestRoad.getProperty("NAME").value + "\n";
		Logger.info(str);
	}
	else
		Logger.info("Unknown map event: "+e);
}

function findFeaturesNearPosition(featureTypeName, geometryAttributeName, mapPosition2D, accuracy, units)
{

	var ff2 = org.geotools.factory.CommonFactoryFinder.getFilterFactory2(null),
		layer = findLayer(featureTypeName),
		geometryFactory = new JTS.GeometryFactory(),
		point = geometryFactory.createPoint(new JTS.Coordinate(mapPosition2D.x, mapPosition2D.y)),
		filter = ff2.dwithin(ff2.property(geometryAttributeName), ff2.literal(point), accuracy, units);
	return layer.featureSource.getFeatures(filter);
}

function getClosestFeature(features, position)
{
	var geometryFactory = new JTS.GeometryFactory(),
		point = geometryFactory.createPoint(new JTS.Coordinate(position.x, position.y)),
		closest = null, closestDistance = null;
	for (var it = features.iterator(); it.hasNext();)
	{
		var f = it.next(),
			g = f.getProperty("THE_GEOM").value,
			d = g.distance(point);
		if (closestDistance != null && d < closestDistance || closestDistance == null && closest == null)
		{
			closest = f;
			closestDistance = d;
		}
	}
	return closest;
}

function findLayer(featureTypeName)
{
	var layers = mapControl.mapPane.mapContext.layers
	for (var i = 0; i < layers.length; i++)
	{
		var layer = layers[i];
		if (layer.featureSource.schema.name.localPart == featureTypeName)
			return layer;
	}
	return null;
}

function convertToGeographicCRS(point)
{
	var mapContext = mapControl.mapPane.mapContext;
	var projCRS = mapContext.coordinateReferenceSystem,
		geoCRS = projCRS.baseCRS; // we assert that context's CRS is projected that is usualy true.
	if (coordinateOperationFactory == null)
		coordinateOperationFactory = org.geotools.referencing.ReferencingFactoryFinder.getCoordinateOperationFactory(null);
	if (coordinatesTransform == null)
		coordinatesTransform = coordinateOperationFactory.createOperation(projCRS, geoCRS);
	var transformedMapPosition = new java.awt.geom.Point2D.Double();
	coordinatesTransform.mathTransform.transform(point, transformedMapPosition);
	transformedMapPosition = new org.geotools.geometry.DirectPosition2D(transformedMapPosition);
	transformedMapPosition.coordinateReferenceSystem = geoCRS;
	return transformedMapPosition;
}

function resultsToString(results)
{
	var str = "["+results.count+": ",
		delimiter = "";
	for (var it = results.iterator(); it.hasNext();)
	{
		str += delimiter + it.next().toString();
		delimiter = ", ";
	}
	str += "]";
	return str;
}

function updateMapDetalization(zoomEvent)
{
	dsParameters.beginUpdate();
	try {
		/* The comparison with the detalization level below is in projected CRS measure units,
		because it is more convenient to think about distances in meters, than in degrees. */
		parLoadDetails = (zoomEvent.newDisplayArea.height <= MAX_DETALIZATION_LEVEL && 
		 				zoomEvent.newDisplayArea.width <= MAX_DETALIZATION_LEVEL) ? 1 : 0;
		/* We know that crs is north-pole stereographically projected CRS, so we could just take
		the baseCRS from it, but the additional checks serve as an example of generic code.
		Application code could just use hard-coded transformation, because it usually know
		the coordinate reference systems used to store coordinates. */
		var crs = mapControl.mapPane.mapContext.coordinateReferenceSystem;
		if (crs instanceof org.opengis.referencing.crs.ProjectedCRS)
			/* The baseCRS for projected CRS-es is GeographicCRS. We also know that the database stores angular
			coordinates. */
			crs = crs.baseCRS;
		if (!(crs instanceof org.opengis.referencing.crs.GeographicCRS))
			Logger.warn("CRS "+crs+" is not a geographic CRS, so cannot specify display area bounds in degrees.");
		else
		{
			/* Coordinates are stored in WGS84 in the database, so we need to transform linear projected
			coordinates to the angular ones. */
			var displayArea = zoomEvent.newDisplayArea.transform(crs, true /*lenient transform*/);
			parX1 = displayArea.minX();
			parY1 = displayArea.minY();
			parX2 = displayArea.maxX();
			parY2 = displayArea.maxY();
		}
	} finally {
		dsParameters.endUpdate();
	}
}

function mapControl_onMapEvent(evt) {//GEN-FIRST:event_mapControl_onMapEvent
	// TODO Добавьте здесь свой код:
}//GEN-LAST:event_mapControl_onMapEvent
