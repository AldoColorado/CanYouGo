import { TipeMessage } from "../../enum/TipeMessage";
import { Cliente } from "../../models/models/Cliente";
import createAcountRequest from "./createAcountRequest";

export class createAcountService {
  public static createCliente(
    cliente: Cliente,
    setSnackbarOpen: (e: boolean) => void,
    statusRegisterCliente: (e: {
      code: number;
      message: string;
      tipe: TipeMessage;
    }) => void,
    setCloseModalRegisterCliente: (e: boolean) => void,
    setCliente: (cliente: Cliente) => void
  ) {
    createAcountRequest
      .createCliente(cliente)
      .then((res) => {
        console.log(res.data);

        statusRegisterCliente({
          code: 200,
          message: "Usuario creado correctamente",
          tipe: TipeMessage.SUCCESS,
        });
        setSnackbarOpen(true);
        setCloseModalRegisterCliente(false);
        setCliente({} as Cliente);
      })
      .catch((err) => {
        let error = JSON.stringify(err);
        let errorParce = JSON.parse(error);
        console.log(errorParce.status);

        statusRegisterCliente({
          code: errorParce.status,
          message: "Error al crear el usuario",
          tipe: TipeMessage.ERROR,
        });
        setSnackbarOpen(true);
      });
  }
}
