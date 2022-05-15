import React from "react";
import "./Main.css";
import RoutesTodo from "../components/todoRoutes/RoutesTodo";
import MapApp from "../components/map/MapApp";

const Main = () => {
  return (
    <div className="main">
      <div className="block-one">
        <RoutesTodo />
      </div>
      <div className="block-two">
        <MapApp />
      </div>
    </div>
  );
};

export default Main;
