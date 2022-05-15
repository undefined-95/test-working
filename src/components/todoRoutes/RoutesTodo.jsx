import React, {useState} from "react";
import { default as routesData } from "../../data/routesLogistics.json";
import "./RoutesTodo.css";

const RoutesTodo = () => {
    const [activeBlock, setActiveBlock] = useState(null)
  return (
    <>
      <h2 className="header-todo">Список заказов</h2>
      {routesData.features.map((item) => (
        <div className="main-content" onClick={()=>{setActiveBlock(item.geometry)}}>
          <div>
            <div className="tr-main">
              <h4>Точка A</h4>
              <h4>Точка B</h4>
            </div>
          </div>
          <div>
            <div className="tr-main tr-main-two">
              <p>{item.properties.NAME_DOT_A}</p>
              <p>{item.properties.NAME_DOT_B}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoutesTodo;
