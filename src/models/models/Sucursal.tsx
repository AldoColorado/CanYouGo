import { Horario } from "./Horario";
import { MedidasSanitarias } from "./MedidasSanitarias";
import { Negocio } from "./Negocio";
import { Servicio } from "./Servicio";

export interface Sucursal{

    idSucursal: number;
    aforoActual: number;
    capacidad: number;
    direccion: string;
    latitud: string;
    longitud: string;
    telefono: string;
    medidasSanitarias: string;
    foto: string;
    fotoPortada: string;
    Negocio: Negocio;
    fotoAforo: string;
    porcentajeAforo: string;
    Horario: Horario[];
    MedidasSanitarias: MedidasSanitarias[];
    Servicio: Servicio[]
    
}