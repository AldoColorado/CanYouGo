import React, { useEffect, useState } from "react";
import { Sucursal } from "../../models/models/Sucursal";
import SubtitleInfo from "../CanYouGo/Titles/Subtitles/SubtitleInfo";
import TitleMenu from "../CanYouGo/Titles/Title";
import TitleNegocio from "../CanYouGo/Titles/TitleNegocio";
import Title from "../Login/Title/Title";
import "./cardMedidasSanitarias.css"

const CardMedidasSanitarias = ({ sucursal }: { sucursal: Sucursal }) => {

  return (
    <div className="card-medidas-sanitarias">
      <div className="info-medidasSanitarias">
        <SubtitleInfo text="Medidas sanitarias"></SubtitleInfo>

        {sucursal.MedidasSanitarias !== undefined &&
          sucursal.MedidasSanitarias.length > 0 &&
          sucursal.MedidasSanitarias.map((item) => (
            <h4 className="medida">{item.medida}</h4>
          ))}
      </div>
    </div>
  );
}

export default CardMedidasSanitarias;