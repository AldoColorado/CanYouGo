import { Negocio } from "./Negocio";

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
    porcentajeAforo: string
}