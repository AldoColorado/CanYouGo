import React, { useEffect, useState } from "react";
import { Sucursal } from "../../models/models/Sucursal";
import SubtitleInfo from "../CanYouGo/Titles/Subtitles/SubtitleInfo";
import TitleMenu from "../CanYouGo/Titles/Title";
import TitleNegocio from "../CanYouGo/Titles/TitleNegocio";
import Title from "../Login/Title/Title";
import "./cardServicios.css"

const CardServicios = ({ sucursal }: { sucursal: Sucursal }) => {

  return (
    <div className="card-servicios">
      <div className="info-servicios">
        <SubtitleInfo text="Servicios"></SubtitleInfo>

        {sucursal.Servicio !== undefined &&
          sucursal.Servicio.length > 0 &&
          sucursal.Servicio.map((item) => (
            <h4 className="servicio">{item.nombreServicio}</h4>
          ))}
      </div>
    </div>
  );
}

export default CardServicios;