import React from "react";
import GA from "./imgs/GA.png";
import PC from "./imgs/PC.png";
import PP from "./imgs/PP.png";
import VC from "./imgs/VC.png";
import IG from "./imgs/IG.png";
import IPP from "./imgs/IPP.png";
import IPC from "./imgs/IPC.png";
import IV from "./imgs/IV.png";
import "./css/producter.css";
const Producter = () => {
  return (
    <div className="container-producter">
      <div className="item">
        <div className="item-content">
          <img className="foto" src={GA} alt="" />
          <img className="icon" src={IG} alt="" />
          <p className="text">
            GABINETES
            <br /> DE MADERA
          </p>
        </div>
      </div>
      <div className="item">
        <div className="item-content">
          <img className="foto" src={PP} alt="" />
          <img className="icon" src={IPP} alt="" />
          <p className="text">
            PUERTAS <br /> POLIMENTAL
          </p>
        </div>
      </div>
      <div className="item">
        <div className="item-content">
          <img className="foto" src={PC} alt="" />
          <img className="icon" src={IPC} alt="" />
          <p className="text">
            PUERTAS <br /> CORREDIZAS
          </p>
        </div>
      </div>
      <div className="item">
        <div className="item-content">
          <img className="foto" src={VC} alt="" />
          <img className="icon" src={IV} alt="" />
          <p className="text">
            FABRICANTES <br /> DE VENTANAS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Producter;
