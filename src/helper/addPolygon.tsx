import Graphic from "@arcgis/core/Graphic";
import Polygon from "@arcgis/core/geometry/Polygon";

const test = [
  [
    [83.9193619, 27.3561319], //Longitude, latitude
    [84.7963669, 27.880879], //Longitude, latitude
    [84.422313, 27.6937873], //Longitude, latitude
    [84.422413, 27.6938873], //Longitude, latitude
    [84.4399763, 27.6871462], //Longitude, latitude
    [84.4400763, 27.6872462], //Longitude, latitude
  ],
];
const polygon = new Polygon({
  rings: test,
});

const popupTemplate = {
  title: "{Name}",
  content: "{Description}",
};
const attributes = {
  Name: "Graphic",
  Description: "I am a polygon",
};
const simpleFillSymbol = {
  type: "simple-fill",
  color: [227, 139, 79, 0.8], // Orange, opacity 80%
  outline: {
    color: [255, 255, 255],
    width: 1,
  },
};
export const polygonGraphic = new Graphic({
  geometry: polygon,
  symbol: simpleFillSymbol,
  attributes: attributes,
  popupTemplate: popupTemplate,
});
