import React, { useEffect, useState } from "react";
import { Negocio } from "../../models/models/Negocio";
import { Sucursal } from "../../models/models/Sucursal";
import { SidebarProps } from "../../models/sidebarProps";
import { anonymousService } from "../../services/anonymousService";
import "./canYouGo.css";
import aforoEmpty from "../../assets/images/Empty.png";
import aforoHallFull from "../../assets/images/HallFull.png";
import aforoFull from "../../assets/images/Full.png";
import Header from "../Header/Header";
import CardNegocio from "../CardNegocio/CardNegocio";
import Title from "../Login/Title/Title";
import TitlePrincipal from "./Titles/TitlePrincipal";


const CanyouGo = (props: SidebarProps) => {
  const { handleHideSidebar, id } = props;

  const [negocios, setNegocios] = useState<Negocio[]>([]);

  const [sucursales, setSucursales] = useState<Sucursal[]>([]);

  useEffect(() => {
    //anonymousService.getNegocios(setNegocios);
    anonymousService.getSucursales(setSucursales);
  }, []);

  console.log(sucursales);

  return (
    <React.Fragment>
      <Header handleHideSidebar={handleHideSidebar} id={id} />

      
      <div className="contenedor">

        <div className="conteiner">
          <div>
            <TitlePrincipal text="Cerca de ti..."/>

          </div>
        <div className="cards-negocios mt-3">
          

          {sucursales.length > 0 &&
            sucursales.map((item) =>
              (  
              <CardNegocio sucursal={item} key={item.idSucursal} />
            ))}
        </div>
        </div>

        
      </div>
    </React.Fragment>
  );
};
export default CanyouGo;
