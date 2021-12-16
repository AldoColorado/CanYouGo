import React, { ReactNode, useEffect, useState } from "react";
import { Negocio } from "../../models/models/Negocio";
import { Sucursal } from "../../models/models/Sucursal";
import "./portadaNegocio.css";
import aforoEmpty from "../../assets/images/Empty.png";
import aforoHallFull from "../../assets/images/HallFull.png";
import aforoFull from "../../assets/images/Full.png";
import Title from "../Login/Title/Title";
import Subtitle from "../CanYouGo/Titles/Subtitle";
import TitleNegocio from "../CanYouGo/Titles/TitleNegocio";


const PortadaNegocio = ({ sucursal }: { sucursal: Sucursal }) => {
  const [imagenAforoo, setImagenAforoo] = useState<string>("");
  const [porcentaAforo, setPorcentaAforo] = useState<string>("");

  const asignarTarjeta = () => {
    const aforoPorcentaje = (sucursal.aforoActual * 100) / sucursal.capacidad;

    let porcentajeSinDecimales = Math.trunc(aforoPorcentaje)

    const fraseAforo = porcentajeSinDecimales.toString() + " % de aforo";
    setPorcentaAforo(fraseAforo);

    if (aforoPorcentaje > 80) {
      setImagenAforoo(aforoFull);
    } else if (aforoPorcentaje > 30 && aforoPorcentaje <= 80) {
      setImagenAforoo(aforoHallFull);
    } else setImagenAforoo(aforoEmpty);
  };

  useEffect(() => {
    asignarTarjeta();
  }, []);

  return (
    <div className="portada">
      <div className="portada-containeer">
        <div className="card-portadanegocio">
          <div>
            <img src={sucursal.Negocio.fotoPortada} />
          </div>
          <div className="info-portadanegocio">
            <div className="info-general">
              <img src={sucursal.foto} />

              <div className="datos-negocio">
                <div>
                  <TitleNegocio text={sucursal.Negocio.nombre}></TitleNegocio>
                </div>
                <div>
                  <Subtitle text={sucursal.Negocio.descripción}></Subtitle>
                </div>

                <div className="apartado-aforo">
                  <div className="imagen-aforo">
                    <img src={imagenAforoo} />
                  </div>
                  <div className="porcentaje-frase">
                    <Subtitle text={porcentaAforo}></Subtitle>
                  </div>
                </div>
              </div>
            </div>
            <div className="reservar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortadaNegocio;