import { Modal, Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import "./login.css";
import Title from "./Title/Title";
import TittleWelcome from "./TitleWelcome/TitleWelcome";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CustomInput from "./Input/CustomInput";
import imagenlogo from "../../assets/images/Logo.png";
import TitleWelcome from "./TitleWelcome/TitleWelcome";
import PrimaryButton from "../Miscelaneous/PrimaryButton/PrimaryButton";
import { loginService } from "../../services/loginService";
import RegisterType from "../RegisterType/RegisterType";
import { Alert } from "@material-ui/lab";
import { TipeMessage } from "../../enum/TipeMessage";

const Login = ({
  openModal,
  setOpenModal,
  setIsLoget
}: {
  openModal: boolean;
  setOpenModal: (e: boolean) => void;
  setIsLoget:(e:boolean)=>void
}) => {
  const [login, setLogin] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const [statusLogin, setStatusLogin] = useState<{
    code: number;
    message: string;
    tipe: TipeMessage;
  }>({
    code: 0,
    message: "",
    tipe: TipeMessage.INFO,
  });

  const [openRegisterTypeModal, setOpenRegisterTypeModal] =
    useState<boolean>(false);

  console.log(login);

  const LoginUser = () => {
    loginService.login(
      login,
      setSnackbarOpen,
      setStatusLogin,
      setOpenModal,
      setIsLoget,
      setLogin
    );
  };
  
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="modalLogin"
      >
        <div className="login-modal">
          <div className="loginform">
            <Title text="Login" />
            <CustomInput
              icon={<PersonIcon />}
              input={
                <input
                  placeholder="Username"
                  type="text"
                  value={login.username}
                  onChange={(e) =>
                    setLogin({ ...login, username: e.target.value })
                  }
                />
              }
            />
            <CustomInput
              icon={<VpnKeyIcon />}
              input={
                <input
                  placeholder="Password"
                  type="Password"
                  value={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
              }
            />

            <a href="#" className="link-contraseña">
              ¿Olvidaste tu contraseña?
            </a>

            <div onClick={() => LoginUser()}>
              <PrimaryButton name={"Iniciar Sesión"} />
            </div>

            <div className="link-registrarse">
              <div>¿No tienes cuenta?</div>
              <span className="link" onClick={() => setOpenRegisterTypeModal(true)}>
                Registrate aquí
              </span>
            </div>
          </div>
          <div className="logo">
            <img src={imagenlogo} width={500} />
            <TitleWelcome text="Bienvenido a Can You Go?" />
          </div>
        </div>
      </Modal>

      <RegisterType openRegisterTypeModal={openRegisterTypeModal} setOpenRegisterTypeModal={setOpenRegisterTypeModal} />


      
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity={statusLogin.tipe}>{statusLogin.message}</Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Login;
