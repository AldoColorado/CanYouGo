import { Button, Modal, Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import TitleWelcome from "../Login/TitleWelcome/TitleWelcome";
import PrimaryButton from "../Miscelaneous/PrimaryButton/PrimaryButton";
import "./registerCliente.css";
import imgDueño from "../../assets/images/Dueño.png";
import imgCliente from "../../assets/images/Cliente.png";
import Title from "../Login/Title/Title";
import CustomInput from "../Login/Input/CustomInput";
import PersonIcon from "@material-ui/icons/Person";
import { Cliente } from "../../models/models/Cliente";
import { Cuenta } from "../../models/models/Cuenta";
import { createAcountService } from "../../services/CreateAcount/createAcountService";
import { Alert } from "@material-ui/lab";
import { TipeMessage } from "../../enum/TipeMessage";

const RegisterCliente = ({
  openRegisterClienteModal,
  setOpenRegisterClienteModal,
}: {
  openRegisterClienteModal: boolean;
  setOpenRegisterClienteModal: (e: boolean) => void;
}) => {
  const [cliente, setCliente] = useState<Cliente>({
    username: "",
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    telefono: "",
    tipoUsuario: "",
  });

  const [statusRegisterCliente, setstatusRegisterCliente] = useState<{
    code: number;
    message: string;
    tipe: TipeMessage;
  }>({
    code: 0,
    message: "",
    tipe: TipeMessage.INFO,
  });

  const CrearCliente = () => {
    createAcountService.createCliente(
        cliente,
        setSnackbarOpen,
        setstatusRegisterCliente,
        setOpenRegisterClienteModal,
        setCliente
    )
  };

  

  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Modal
        open={openRegisterClienteModal}
        onClose={() => setOpenRegisterClienteModal(false)}
        className="modalRegisterClient"
      >
        <div className="modal-registerCliente">
          <div className="form-cliente">
            <div className="title-crearcuenta">
              <Title text="Crea cuenta de cliente" />
            </div>
            <CustomInput
              icon
              input={
                <input
                  placeholder="Username"
                  type="text"
                  value={cliente.username}
                  onChange={(e) =>
                    setCliente({ ...cliente, username: e.target.value })
                  }
                />
              }
            />

            <CustomInput
              icon
              input={
                <input
                  placeholder="Nombre"
                  type="text"
                  value={cliente.nombre}
                  onChange={(e) =>
                    setCliente({ ...cliente, nombre: e.target.value })
                  }
                />
              }
            />

            <CustomInput
              icon
              input={
                <input
                  placeholder="Apellidos"
                  type="text"
                  value={cliente.apellidos}
                  onChange={(e) =>
                    setCliente({ ...cliente, apellidos: e.target.value })
                  }
                />
              }
            />

            <CustomInput
              icon
              input={
                <input
                  placeholder="Telefono"
                  type="text"
                  value={cliente.telefono}
                  onChange={(e) =>
                    setCliente({ ...cliente, telefono: e.target.value })
                  }
                />
              }
            />

            <CustomInput
              icon
              input={
                <input
                  placeholder="Correo"
                  type="text"
                  value={cliente.correo}
                  onChange={(e) =>
                    setCliente({ ...cliente, correo: e.target.value })
                  }
                />
              }
            />

            <CustomInput
              icon
              input={
                <input
                  placeholder="Password"
                  type="Password"
                  value={cliente.password}
                  onChange={(e) =>
                    setCliente({ ...cliente, password: e.target.value })
                  }
                />
              }
            />

            <div onClick={() => CrearCliente()}>
              <PrimaryButton name="Registrarse" />
            </div>
          </div>

          <div className="img-clientes">
            <img src={imgCliente} />
          </div>
        </div>
      </Modal>

      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity={statusRegisterCliente.tipe}>{statusRegisterCliente.message}</Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default RegisterCliente;
