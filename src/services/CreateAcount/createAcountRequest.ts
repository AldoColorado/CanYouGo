import axios from "axios";
import { Cliente } from "../../models/models/Cliente";
import { Cuenta } from "../../models/models/Cuenta";
import { Dueño } from "../../models/models/Dueño";


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

  async createDueño(dueño: Dueño) {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}Cuenta`, {
        username: dueño.username,
        nombre: dueño.nombre,
        correo: dueño.correo,
        password: dueño.password,
        apellidos: dueño.apellidos,
        tipoUsuario: "dueño",
        telefono: dueño.telefono,
        RFC: dueño.RFC
    });

  }

}

export default new createAcountRequest();