import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import TitleWelcome from "../Login/TitleWelcome/TitleWelcome";
import PrimaryButton from "../Miscelaneous/PrimaryButton/PrimaryButton";
import "./registerType.css";
import imgDueño from "../../assets/images/Dueño.png";
import imgCliente from "../../assets/images/Cliente.png";
import Title from "../Login/Title/Title";
import RegisterCliente from "../RegisterCliente/RegisterCliente";

const RegisterType = ({
  openRegisterTypeModal,
  setOpenRegisterTypeModal,
}: {
  openRegisterTypeModal: boolean;
  setOpenRegisterTypeModal: (e: boolean) => void;
}) => {

  const [openRegisterClienteModal, setOpenRegisterClienteModal] =
    useState<boolean>(false);

    
  return (
    <React.Fragment>
      <Modal
        open={openRegisterTypeModal}
        onClose={() => setOpenRegisterTypeModal(false)}
        className="modalRegisterType"
      >
        <div className="modal-registerType">
          <div>
            <TitleWelcome text="¿Cómo quieres registrarte?" />
          </div>

          <div className="registertype-modal">
            <div className="cliente">
              <div className="btn-up" onClick={() => setOpenRegisterClienteModal(true) }>
                <PrimaryButton name="Registrate como cliente" />
              </div>
              <img src={imgCliente} />
            </div>
            <div className="dueño">
              <div className="btn-up" >
                <PrimaryButton name="Registrate como dueño" />
              </div>
              <img src={imgDueño}></img>
            </div>
          </div>
        </div>
      </Modal>

      <RegisterCliente openRegisterClienteModal={openRegisterClienteModal} setOpenRegisterClienteModal={setOpenRegisterClienteModal} />
      
    </React.Fragment>
  );
};

export default RegisterType;
