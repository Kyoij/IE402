const day = [
	[106.72040940828094, 10.793309924340596],
	[106.72031955427897, 10.793309660863752],
	[106.72031874962856, 10.793280151566352],
	[106.72027905294749, 10.793279624617638],
	[106.720277711843, 10.793249588368521],
	[106.72026517252816, 10.793249917708355],
	[106.72026007632694, 10.793181413973883],
	[106.72024907927404, 10.793181677450843],
	[106.72022413476301, 10.79278883451504],
	[106.72019945840735, 10.79278988844434],
	[106.72019449630436, 10.792727708016342],
	[106.72023955746491, 10.792722438489324],
	[106.72023848459769, 10.792689767435784],
	[106.7203897611697, 10.792679228380312],
	[106.7203886882206, 10.792709791656245],
	[106.72043267651392, 10.792707683837278],
	[106.720448769768, 10.793267307122713],
	[106.72040800015824, 10.793269414927698],
	[106.72040940828094, 10.793309924340596],
];

const render_1_tang = (height, index) => {
	return {
		type: "Feature",
		geometry: {
			type: "MultiPolygon",
			coordinates: [[index == 0 ? day : day.map((d) => [d[0], d[1], height])]],
		},
		properties: {
			"Building Height": 13.0,
			"Built Area": 9310.83,
			"Gross Floor Area": 37243.3,
			Name: "Building",
			"Number of Storeys": 4,
			"Ground to Sea Elevation": -99999.0,
			"Eave to Sea Elevation": -99986.0,
			"Land Use": "Residential",
			"First Storey Height": 4.0,
			"Other Storeys Height": 3.0,
			GIS_uuid: 1000048,
			Modelur_uid: 1000048,
		},
		id: index,
	};
};

const tang = (height) => {
	const tang = [];
	for (let i = 0; i < day.length; i++) {
		tang.push([day[i][0], day[i][1], height]);
	}
	return tang;
};

const thelandmark_1 = () => {
	// NOTE: day de day
	const so_tang = 47;
	const data = [];
	for (let i = 0; i < so_tang; i++) {
		data.push(render_1_tang(i * 3, i));
	}

	return {
		type: "FeatureCollection",
		features: data,
		crs: {type: "name", properties: {name: "urn:ogc:def:crs:OGC:1.3:CRS84"}},
	};
};
