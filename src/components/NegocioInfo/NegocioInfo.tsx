import React, { useEffect, useState } from "react";
import {
   
    useParams,
  } from "react-router-dom";
import { Sucursal } from "../../models/models/Sucursal";
import { anonymousService } from "../../services/anonymousService";
import CardMedidasSanitarias from "../CardMedidasSanitarias/CardMedidasSanitarias";
import CardServicios from "../CardServicios/CardServicios";
import Map from "../Map/Map";
import NegocioInfoGeneral from "../NegocioInfoGeneral/NegocioInfoGeneral";
import PortadaNegocio from "../PortadaNegocio/PortadaNegocio";
import "./negocioInfo.css";


const NegocioInfo = () => {
  const id = useParams();

  const [sucursal, setSucursal] = useState<Sucursal>({} as Sucursal);

  let justId: number = 0;

  useEffect(() => {
    justId = Number(id.id?.split("d")[1]);
    anonymousService.getSucursal(justId, setSucursal);
  }, []);

  console.log(sucursal);

  return (
    <div className="contenedor-principal-negocio">
      <div className="contenedor-negocio">
        <div className="negocio-portada">
          <div>
            {Object.keys(sucursal).length > 0 && (
              <PortadaNegocio sucursal={sucursal}></PortadaNegocio>
            )}
          </div>
        </div>
        <div className="info-general-horario">
          <div>
            {Object.keys(sucursal).length > 0 && (
              <NegocioInfoGeneral sucursal={sucursal}></NegocioInfoGeneral>
            )}
          </div>
          <div className="medidas-servicios">
            <div>
              {Object.keys(sucursal).length > 0 && (
                <CardMedidasSanitarias
                  sucursal={sucursal}
                ></CardMedidasSanitarias>
              )}
            </div>
            <div>
              {Object.keys(sucursal).length > 0 && (
                <CardServicios sucursal={sucursal}></CardServicios>
              )}
            </div>
          </div>

          <div>{Object.keys(sucursal).length > 0 && <Map></Map>}</div>
        </div>
      </div>
    </div>
  );
}

export default NegocioInfo;