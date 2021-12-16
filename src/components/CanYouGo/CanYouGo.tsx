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
import SearchBox from "../SearchBox/SearchBox";

const CanyouGo = (props: SidebarProps) => {
  

  const [negocios, setNegocios] = useState<Negocio[]>([]);

  const [sucursales, setSucursales] = useState<Sucursal[]>([]);

  const [valorBuscar, setValorBuscar] = useState<string>("");

  useEffect(() => {
    anonymousService.getSucursales(setSucursales);
  }, []);

  return (
    <React.Fragment>
      <div className="contenedor-principal">
        <div className="container-content">
          <div className="search-box">
            <SearchBox
              setValorBuscar={setValorBuscar}
              valorBuscar={valorBuscar}
            />
          </div>

          <div className="contenedor">
            <div className="conteiner">
              <div>
                <TitlePrincipal text="Cerca de ti..." />
              </div>
              <div className="cards-negocios mt-3">
                {sucursales.length > 0 &&
                  sucursales
                    .filter((item) =>
                      item.Negocio.nombre
                        .toLowerCase()
                        .includes(valorBuscar.toLowerCase())
                    )
                    .map((item) => (
                      <CardNegocio sucursal={item} key={item.idSucursal} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CanyouGo;
