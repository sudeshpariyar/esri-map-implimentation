import Graphic from "@arcgis/core/Graphic";
import Polyline from "@arcgis/core/geometry/Polyline";

const polyline = new Polyline({
  paths: [
    [
      [-118.821527826096, 34.0139576938577],
      [-118.814893761649, 34.0080602407843],
      [-118.808878330345, 34.0016642996246],
    ],
  ],
});
const simpleLineSymbol = {
  type: "simple-line",
  color: [226, 119, 40],
  width: 2,
};
export const lineGraphics = new Graphic({
  geometry: polyline,
  symbol: simpleLineSymbol,
});
