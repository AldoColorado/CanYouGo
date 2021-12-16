import { Negocio } from "../models/models/Negocio";
import { Sucursal } from "../models/models/Sucursal";
import anonymousRequest from "./anonymousRequest";

export class anonymousService {

  public static getNegocios(setNegocios: (e: Negocio[]) => void) {
    anonymousRequest
      .getNegocios()
      .then((res) => {
        console.log(res.data);
        const data = res.data as Negocio[];
        setNegocios(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public static getSucursales(setSucursales: (e: Sucursal[]) => void) {
    anonymousRequest
      .getSucursales()
      .then((res) => {
        console.log(res.data);
        const data = res.data as Sucursal[];
        setSucursales(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  
  public static getSucursal(idSucursal: number, setSucursal: (e: Sucursal) => void) {

    

    anonymousRequest
      .getSucursal(idSucursal)
      .then((res) => {
        console.log(res.data);
        const data = res.data as Sucursal;
        setSucursal(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


}
