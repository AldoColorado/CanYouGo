import { Button, Modal, Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import TitleWelcome from "../Login/TitleWelcome/TitleWelcome";
import PrimaryButton from "../Miscelaneous/PrimaryButton/PrimaryButton";
import "./registerDueño.css";
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
import { Dueño } from "../../models/models/Dueño";

const RegistrarDueño = ({
  openRegistrarDueñoModal,
  setOpenRegistrarDueñoModal,
  setCloseModalRegisterType
}: {
  openRegistrarDueñoModal: boolean;
  setOpenRegistrarDueñoModal: (e: boolean) => void;
  setCloseModalRegisterType: (e: boolean) => void;
}) => {
  const [dueño, setDueño] = useState<Dueño>({
    username: "",
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    telefono: "",
    tipoUsuario: "",
    RFC: ""
  });

  const [statusRegistrarDueño, setstatusRegistrarDueño] = useState<{
    code: number;
    message: string;
    tipe: TipeMessage;
  }>({
    code: 0,
    message: "",
    tipe: TipeMessage.INFO,
  });

  


  const CrearDueño = () => {
    
    setCloseModalRegisterType(false);

    createAcountService.createDueño(
        dueño,
        setSnackbarOpen,
        setstatusRegistrarDueño,
        setOpenRegistrarDueñoModal,
        setDueño,
        
    )
  };

  

  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Modal
        open={openRegistrarDueñoModal}
        onClose={() => setOpenRegistrarDueñoModal(false)}
        className="modalRegisterDueño"
      >
        <div className="modal-RegistrarDueño">
          <div className="form-dueño">
            <div className="title-crearcuentaDueño">
              <Title text="Crea cuenta de dueño" />
            </div>
            <CustomInput
              icon
              input={
                <input
                  placeholder="Username"
                  type="text"
                  value={dueño.username}
                  onChange={(e) =>
                    setDueño({ ...dueño, username: e.target.value })
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
                  value={dueño.nombre}
                  onChange={(e) =>
                    setDueño({ ...dueño, nombre: e.target.value })
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
                  value={dueño.apellidos}
                  onChange={(e) =>
                    setDueño({ ...dueño, apellidos: e.target.value })
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
                  value={dueño.telefono}
                  onChange={(e) =>
                    setDueño({ ...dueño, telefono: e.target.value })
                  }
                />
              }
            />

            <CustomInput
              icon
              input={
                <input
                  placeholder="RFC"
                  type="text"
                  value={dueño.RFC}
                  onChange={(e) =>
                    setDueño({ ...dueño, RFC: e.target.value })
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
                  value={dueño.correo}
                  onChange={(e) =>
                    setDueño({ ...dueño, correo: e.target.value })
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
                  value={dueño.password}
                  onChange={(e) =>
                    setDueño({ ...dueño, password: e.target.value })
                  }
                />
              }
            />

            <div onClick={() => CrearDueño()}>
              <PrimaryButton name="Registrarse" />
            </div>
          </div>

          <div className="img-dueños">
            <img src={imgDueño} />
          </div>
        </div>
      </Modal>

      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity={statusRegistrarDueño.tipe}>
          {statusRegistrarDueño.message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default RegistrarDueño;
