import { TipeMessage } from "../enum/TipeMessage";
import { Cuenta } from "../models/models/Cuenta";
import anonymousRequest from "./anonymousRequest";
import loginRequest from "./loginRequest";

export class loginService {
  public static login(
    login: { username: string; password: string },
    setSnackbarOpen: (e: boolean) => void,
    setStatusLogin: (e: {
      code: number;
      message: string;
      tipe: TipeMessage;
    }) => void,
    setCloseModalLogin: (e: boolean) => void,
    setIsLoget: (e: boolean) => void,
    setLogin: (e: { username: string; password: string }) => void
  ) {
    loginRequest
      .login(login.username, login.password)
      .then((res) => {
        console.log(res.data);
        const data = res.data as Cuenta;
        this.setLocalStorage(data);

        setStatusLogin({
          code: 200,
          message: "Login correcto",
          tipe: TipeMessage.SUCCESS,
        });
        setSnackbarOpen(true);
        setCloseModalLogin(false);
        setIsLoget(true);
        setLogin({} as { username: string; password: string });
      })
      .catch((err) => {
        let error = JSON.stringify(err);
        let errorParce = JSON.parse(error);
        console.log(errorParce.status);
        setStatusLogin({
          code: errorParce.status,
          message: "Usuario o contraseña incorrecto",
          tipe: TipeMessage.ERROR,
        });
        setSnackbarOpen(true);
      });
  }

  public static setLocalStorage(data: Cuenta) {
    localStorage.setItem("authToken", data.authToken);
    localStorage.setItem("username", data.username);
    localStorage.setItem("tipoUsuario", data.tipoUsuario);
  }

  public static getToken() {
    return localStorage.getItem("authToken");
  }

  public static getUsername() {
    return localStorage.getItem("username");
  }

  public static getTipoUsuario() {
    return localStorage.getItem("tipoUsuario");
  }

  public static logout(setIsLoget: (e: boolean) => void) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("tipoUsuario");
    setIsLoget(false);
  }
}
