import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { pointGraphic } from "../helper/addPoint";
import { lineGraphics } from "../helper/addLine";
import { polygonGraphic } from "../helper/addPolygon";

const MapComponent = ({
  longitude,
  latitude,
}: {
  longitude: number;
  latitude: number;
}) => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      //Initilize Map
      const webmap = new Map({
        basemap: "dark-gray-vector",
      });
      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        center: [latitude, longitude],
        scale: 1000000,
        zoom: 1,
        popup: {
          dockEnabled: true,
          dockOptions: {
            position: "top-right",
            breakpoint: false,
          },
        },
      });

      const graphicLayer = new GraphicsLayer();
      //add line on the map
      //console.log("THis is the point graphics");

      graphicLayer.add(pointGraphic(latitude, longitude));
      //add line on the map
      graphicLayer.add(lineGraphics);
      //add polygon on the map
      graphicLayer.add(polygonGraphic);
      webmap.add(graphicLayer);

      return () => view && view.destroy();
    }
  }, [longitude, latitude]);
  return (
    <div
      className="mapDiv"
      ref={mapDiv}
      style={{ height: "100vh", width: "100%" }}
    >
      MapComponent
    </div>
  );
};

export default MapComponent;
