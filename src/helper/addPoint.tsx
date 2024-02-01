import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";

export const pointGraphic = (latitude: number, longitude: number) => {
  const point = new Point({ longitude: latitude, latitude: longitude });
  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // White
      width: 1,
    },
  };
  return new Graphic({ geometry: point, symbol: simpleMarkerSymbol });
};
