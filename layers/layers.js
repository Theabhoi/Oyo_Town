ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([346798.691317, 851329.074907, 598885.185514, 981890.559541]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_School_1 = new ol.format.GeoJSON();
var features_School_1 = format_School_1.readFeatures(json_School_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_1.addFeatures(features_School_1);
var lyr_School_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_1, 
                style: style_School_1,
                popuplayertitle: 'School',
                interactive: true,
                title: '<img src="styles/legend/School_1.png" /> School'
            });
var format_River_2 = new ol.format.GeoJSON();
var features_River_2 = format_River_2.readFeatures(json_River_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_2.addFeatures(features_River_2);
var lyr_River_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_2, 
                style: style_River_2,
                popuplayertitle: 'River',
                interactive: true,
                title: '<img src="styles/legend/River_2.png" /> River'
            });
var format_FIllingStation_3 = new ol.format.GeoJSON();
var features_FIllingStation_3 = format_FIllingStation_3.readFeatures(json_FIllingStation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIllingStation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIllingStation_3.addFeatures(features_FIllingStation_3);
var lyr_FIllingStation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIllingStation_3, 
                style: style_FIllingStation_3,
                popuplayertitle: 'FIlling Station',
                interactive: true,
                title: '<img src="styles/legend/FIllingStation_3.png" /> FIlling Station'
            });
var format_Palace_4 = new ol.format.GeoJSON();
var features_Palace_4 = format_Palace_4.readFeatures(json_Palace_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Palace_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Palace_4.addFeatures(features_Palace_4);
var lyr_Palace_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Palace_4, 
                style: style_Palace_4,
                popuplayertitle: 'Palace',
                interactive: true,
                title: '<img src="styles/legend/Palace_4.png" /> Palace'
            });
var format_Oyo_Boundary_5 = new ol.format.GeoJSON();
var features_Oyo_Boundary_5 = format_Oyo_Boundary_5.readFeatures(json_Oyo_Boundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oyo_Boundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oyo_Boundary_5.addFeatures(features_Oyo_Boundary_5);
var lyr_Oyo_Boundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oyo_Boundary_5, 
                style: style_Oyo_Boundary_5,
                popuplayertitle: 'Oyo_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Oyo_Boundary_5.png" /> Oyo_Boundary'
            });
var format_Mosque_6 = new ol.format.GeoJSON();
var features_Mosque_6 = format_Mosque_6.readFeatures(json_Mosque_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_6.addFeatures(features_Mosque_6);
var lyr_Mosque_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_6, 
                style: style_Mosque_6,
                popuplayertitle: 'Mosque',
                interactive: true,
                title: '<img src="styles/legend/Mosque_6.png" /> Mosque'
            });
var format_Minor_Road_7 = new ol.format.GeoJSON();
var features_Minor_Road_7 = format_Minor_Road_7.readFeatures(json_Minor_Road_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minor_Road_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minor_Road_7.addFeatures(features_Minor_Road_7);
var lyr_Minor_Road_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Minor_Road_7, 
                style: style_Minor_Road_7,
                popuplayertitle: 'Minor_Road',
                interactive: true,
                title: '<img src="styles/legend/Minor_Road_7.png" /> Minor_Road'
            });
var format_Major_Road_8 = new ol.format.GeoJSON();
var features_Major_Road_8 = format_Major_Road_8.readFeatures(json_Major_Road_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Major_Road_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Major_Road_8.addFeatures(features_Major_Road_8);
var lyr_Major_Road_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Major_Road_8, 
                style: style_Major_Road_8,
                popuplayertitle: 'Major_Road',
                interactive: true,
                title: '<img src="styles/legend/Major_Road_8.png" /> Major_Road'
            });
var format_LG_9 = new ol.format.GeoJSON();
var features_LG_9 = format_LG_9.readFeatures(json_LG_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LG_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LG_9.addFeatures(features_LG_9);
var lyr_LG_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LG_9, 
                style: style_LG_9,
                popuplayertitle: 'L.G',
                interactive: true,
                title: '<img src="styles/legend/LG_9.png" /> L.G'
            });
var format_OyoBoundary_10 = new ol.format.GeoJSON();
var features_OyoBoundary_10 = format_OyoBoundary_10.readFeatures(json_OyoBoundary_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OyoBoundary_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OyoBoundary_10.addFeatures(features_OyoBoundary_10);
var lyr_OyoBoundary_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OyoBoundary_10, 
                style: style_OyoBoundary_10,
                popuplayertitle: 'Oyo Boundary',
                interactive: true,
                title: '<img src="styles/legend/OyoBoundary_10.png" /> Oyo Boundary'
            });
var format_Hotel_11 = new ol.format.GeoJSON();
var features_Hotel_11 = format_Hotel_11.readFeatures(json_Hotel_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotel_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_11.addFeatures(features_Hotel_11);
var lyr_Hotel_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_11, 
                style: style_Hotel_11,
                popuplayertitle: 'Hotel',
                interactive: true,
                title: '<img src="styles/legend/Hotel_11.png" /> Hotel'
            });
var format_Hospital_12 = new ol.format.GeoJSON();
var features_Hospital_12 = format_Hospital_12.readFeatures(json_Hospital_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_12.addFeatures(features_Hospital_12);
var lyr_Hospital_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_12, 
                style: style_Hospital_12,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_12.png" /> Hospital'
            });
var format_Church_13 = new ol.format.GeoJSON();
var features_Church_13 = format_Church_13.readFeatures(json_Church_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Church_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Church_13.addFeatures(features_Church_13);
var lyr_Church_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Church_13, 
                style: style_Church_13,
                popuplayertitle: 'Church',
                interactive: true,
                title: '<img src="styles/legend/Church_13.png" /> Church'
            });
var format_Prison_14 = new ol.format.GeoJSON();
var features_Prison_14 = format_Prison_14.readFeatures(json_Prison_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prison_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prison_14.addFeatures(features_Prison_14);
var lyr_Prison_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prison_14, 
                style: style_Prison_14,
                popuplayertitle: 'Prison',
                interactive: true,
                title: '<img src="styles/legend/Prison_14.png" /> Prison'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_School_1.setVisible(true);lyr_River_2.setVisible(true);lyr_FIllingStation_3.setVisible(true);lyr_Palace_4.setVisible(true);lyr_Oyo_Boundary_5.setVisible(false);lyr_Mosque_6.setVisible(true);lyr_Minor_Road_7.setVisible(true);lyr_Major_Road_8.setVisible(true);lyr_LG_9.setVisible(true);lyr_OyoBoundary_10.setVisible(true);lyr_Hotel_11.setVisible(true);lyr_Hospital_12.setVisible(true);lyr_Church_13.setVisible(true);lyr_Prison_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_School_1,lyr_River_2,lyr_FIllingStation_3,lyr_Palace_4,lyr_Oyo_Boundary_5,lyr_Mosque_6,lyr_Minor_Road_7,lyr_Major_Road_8,lyr_LG_9,lyr_OyoBoundary_10,lyr_Hotel_11,lyr_Hospital_12,lyr_Church_13,lyr_Prison_14];
lyr_School_1.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'x_': 'x_', 'y_': 'y_', });
lyr_River_2.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_FIllingStation_3.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Palace_4.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Oyo_Boundary_5.set('fieldAliases', {'Id': 'Id', });
lyr_Mosque_6.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Minor_Road_7.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Major_Road_8.set('fieldAliases', {'Id': 'Id', 'Name1': 'Name1', });
lyr_LG_9.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_OyoBoundary_10.set('fieldAliases', {'Id': 'Id', });
lyr_Hotel_11.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Hospital_12.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'x_': 'x_', 'y_': 'y_', });
lyr_Church_13.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Prison_14.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_School_1.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'x_': 'TextEdit', 'y_': 'TextEdit', });
lyr_River_2.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_FIllingStation_3.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_Palace_4.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_Oyo_Boundary_5.set('fieldImages', {'Id': 'TextEdit', });
lyr_Mosque_6.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Minor_Road_7.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Major_Road_8.set('fieldImages', {'Id': 'TextEdit', 'Name1': 'TextEdit', });
lyr_LG_9.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_OyoBoundary_10.set('fieldImages', {'Id': 'Range', });
lyr_Hotel_11.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Hospital_12.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'x_': '', 'y_': '', });
lyr_Church_13.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Prison_14.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_School_1.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'x_': 'no label', 'y_': 'no label', });
lyr_River_2.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_FIllingStation_3.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Palace_4.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Oyo_Boundary_5.set('fieldLabels', {'Id': 'hidden field', });
lyr_Mosque_6.set('fieldLabels', {'Id': 'no label', 'Name': 'inline label - visible with data', });
lyr_Minor_Road_7.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - visible with data', });
lyr_Major_Road_8.set('fieldLabels', {'Id': 'no label', 'Name1': 'inline label - always visible', });
lyr_LG_9.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_OyoBoundary_10.set('fieldLabels', {'Id': 'no label', });
lyr_Hotel_11.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Hospital_12.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'x_': 'no label', 'y_': 'no label', });
lyr_Church_13.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Prison_14.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Prison_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});