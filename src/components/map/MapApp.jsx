import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { default as routesData } from "../../data/adressLogistics.json";
import "./Map.css";
import RoutineMachine from "../route/RoutineMachine";

const MapApp = () => {
  const [map, setMap] = useState(null);
  const routingMachineRef = useRef();
  const pluginRef = useRef();

  useEffect(() => {
    if (!map) return;
    const controlContainer = routingMachineRef.current.onAdd(map);
    pluginRef.current.appendChild(controlContainer);
  }, [map]);

  return (
    <>
      <MapContainer
        center={[55.763630879714704, 37.61532996038886]}
        zoom={15}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {routesData.features.map((item) => (
          <Marker
            key={item.properties.PARK_ID}
            position={[
              item.geometry.coordinates[0],
              item.geometry.coordinates[1],
            ]}
          >
            <Popup>
              <div>
                <h2>{item.properties.NAME}</h2>
                <p>{item.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <RoutineMachine ref={routingMachineRef} />
      </MapContainer>
      <div style={{ border: "1px solid black" }} ref={pluginRef} />
    </>
  );
};

export default MapApp;
