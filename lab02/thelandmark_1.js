const day = [
	[106.72175993542106, 10.793929123775806],
	[106.72175021242364, 10.7936804029847],
	[106.72186007470957, 10.793680402965325],
	[106.72186055405, 10.793707378504372],
	[106.72197907110194, 10.79370701415692],
	[106.72197907110193, 10.793689027724804],
	[106.7221623760848, 10.793688998976956],
	[106.72216295442364, 10.79370691685059],
	[106.72225450633667, 10.793706916837134],
	[106.72225406474935, 10.793661949252236],
	[106.72236446350306, 10.793662124476434],
	[106.7223721302458, 10.79391613573152],
	[106.72225185734935, 10.793916246496],
	[106.72225185734935, 10.793898260063882],
	[106.72186733906997, 10.793898259826518],
	[106.72186765863043, 10.793916243519215],
	[106.72175993542106, 10.793929123775806],
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
	const so_tang = 50;
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
