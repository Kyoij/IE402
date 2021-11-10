require(['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/Graphic', 'esri/layers/GraphicsLayer'], function (
	esriConfig,
	Map,
	MapView,
	Graphic,
	GraphicsLayer
) {
	const map = new Map({
		basemap: 'topo-vector',
	});
	const view = new MapView({
		container: 'viewDiv',
		map: map,
		zoom: 12,
		// center: [15, 65] // longitude, latitude
		center: [105.16324937206271, 9.197167177702024], // longitude, latitude 10.8811081,106.7976408
	});
	const graphicsLayer = new GraphicsLayer();

	// ---------------- CaMau
	const withGraphic = (data) => {
		return new Graphic({
			geometry: { type: 'polygon', rings: data.rings },
			symbol: { type: 'simple-fill', color: data.color },
			attributes: data,
			popupTemplate: {
				title: '{title}',
				content: '<a>Dân số: {population} <br> Diện tích: {area}</a>',
			},
		});
	};

	graphicsLayer.add(withGraphic(ca_mau));
	graphicsLayer.add(withGraphic(bac_lieu));
	graphicsLayer.add(withGraphic(kien_giang));
	graphicsLayer.add(withGraphic(an_giang));
	graphicsLayer.add(withGraphic(can_tho));
	graphicsLayer.add(withGraphic(hau_giang));
	map.add(graphicsLayer);
});
