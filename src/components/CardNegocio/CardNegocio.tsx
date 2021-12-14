import React, { ReactNode, useEffect, useState } from "react";
import { Negocio } from "../../models/models/Negocio";
import { Sucursal } from "../../models/models/Sucursal";
import aforoEmpty from "../../assets/images/Empty.png";
import aforoHallFull from "../../assets/images/HallFull.png";
import aforoFull from "../../assets/images/Full.png";
import "./cardNegocio.css";

const CardNegocio = ({ sucursal }: { sucursal: Sucursal }) => {
  const [imagenAforoo, setImagenAforoo] = useState<string>("");

  const asignarTarjeta = () => {
    const aforoPorcentaje = (sucursal.aforoActual * 100) / sucursal.capacidad;

    if (aforoPorcentaje > 80) {

      setImagenAforoo(aforoFull);


    } else if (aforoPorcentaje > 30 && aforoPorcentaje <= 80) {

      setImagenAforoo(aforoHallFull);


    } else setImagenAforoo(aforoEmpty);

    console.log(imagenAforoo);
  };

  useEffect(() => {
    asignarTarjeta();
  }, []);

  return (
    <div className="card-negocio">
      <div>
        <img src={sucursal.foto} />
      </div>
      <div className="info-negocio">
        <h2>{sucursal.Negocio.nombre}</h2>
        <div className="imagen-capacidad">
          <img src={imagenAforoo} />
        </div>
      </div>
    </div>
  );
};

export default CardNegocio;
