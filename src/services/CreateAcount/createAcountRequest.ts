import axios from "axios";
import { Cliente } from "../../models/models/Cliente";
import { Cuenta } from "../../models/models/Cuenta";


class createAcountRequest {

  async createCliente(cliente: Cliente) {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}Cuenta`, {
        username: cliente.username,
        nombre: cliente.nombre,
        correo: cliente.correo,
        password: cliente.password,
        apellidos: cliente.apellidos,
        tipoUsuario: "cliente",
        telefono: cliente.telefono
    });

  }

}

export default new createAcountRequest();