import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { SidebarProps } from "../../models/sidebarProps";
import Button from "../Miscelaneous/Button/Button";
import Login from "../Login/Login";
import { loginService } from "../../services/loginService";

//import { HeaderItemsEnum } from "../../enum/HeaderItemsEnum";
const Header = (props: SidebarProps) => {
  const { handleHideSidebar } = props;
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [isLoget, setIsLoget] = useState<boolean>(false); 
  
 

  return (
    <React.Fragment>
      <div className="header">
        <div>
          <MenuIcon onClick={handleHideSidebar} />
        </div>
        <div>
          <h1 className="name"> Can You Go</h1>
        </div>
        <div >
          {!isLoget ?  
          
          <div onClick={() => setOpenModal(true)}>
          <Button name={"Iniciar Sesión"} />
          </div>:
          <div onClick={() => loginService.logout(setIsLoget)}>
          <Button name={"Cerrar Sesión"} />
          </div>
            }
        </div>
        
      </div>
      <Login openModal={openModal} setOpenModal={setOpenModal} setIsLoget={setIsLoget} />
    </React.Fragment>
  );
};
export default Header;
