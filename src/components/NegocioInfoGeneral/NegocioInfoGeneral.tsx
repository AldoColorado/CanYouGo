import React, { useEffect, useState } from "react";
import { Sucursal } from "../../models/models/Sucursal";
import SubtitleInfo from "../CanYouGo/Titles/Subtitles/SubtitleInfo";
import TitleMenu from "../CanYouGo/Titles/Title";
import TitleNegocio from "../CanYouGo/Titles/TitleNegocio";
import Title from "../Login/Title/Title";
import "./negocioInfoGeneral.css"

const NegocioInfoGeneral = ({ sucursal }: { sucursal: Sucursal }) => {

  const ConvertirHora = (horaCompleta: string) => {

    return horaCompleta.slice(11,16);
   
  }

  return (
    <div className="card-negocio-infogeneral">
      <div className="container-info-general">
        <div className="container-textInfo">
          <div className="title-infogeneral">
            <SubtitleInfo text="Información del negocio"></SubtitleInfo>
          </div>
          <h3 className="subititleHorario">Horario:</h3>
          {sucursal.Horario !== undefined &&
            sucursal.Horario.length > 0 &&
            sucursal.Horario.map((item) => (
              <h4 className="horarios-sucursal">
                {item.dia} {ConvertirHora(item.horaApertura.toString())}{" "}
                {ConvertirHora(item.horaCierre.toString())}
              </h4>
            ))}
          
          <h3 className="subtitleCorreo">
              Correo electrónico: 
          </h3>
          <h4 className="correo">{sucursal.Negocio.correo}</h4>

          <h3 className="subtitleCorreo">
              Telefono: 
          </h3>
          <h4 className="correo">{sucursal.telefono}</h4>

          <h3 className="subtitleCorreo">
              Métodos de pago: 
          </h3>
          <h4 className="correo">{sucursal.Negocio.metodosPago}</h4>
        </div>
      </div>
    </div>
  );
}

export default NegocioInfoGeneral;