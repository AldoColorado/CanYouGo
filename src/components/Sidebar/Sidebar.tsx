import React, { useEffect, useRef } from "react";
import './sidebar.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ItemSidebar from "../Miscelaneous/ItemSidebar/ItemSidebar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import { SidebarItemsEnum } from "../../enum/sidebarItemsEnum";
import { SidebarProps } from "../../models/sidebarProps";

const Sidebar=(props: SidebarProps)=>{
    
    const {handleHideSidebar, id} = props;

      

    return(
        <React.Fragment>
            <div className="sidebar animated fast fadeOutLeft" id={id}>
                <div className="header"><ArrowBackIcon onClick={handleHideSidebar }/></div>
                    <ItemSidebar icon={<AccountCircleIcon/>} name={SidebarItemsEnum.CUENTA}/>
                    <ItemSidebar icon={<HelpIcon/>} name={SidebarItemsEnum.AYUDA}/>
                    <ItemSidebar icon={<InfoIcon/>} name={SidebarItemsEnum.ACERCA_DE_NOSOTROS}/>

            </div>
        </React.Fragment>
    )
}
export default Sidebar;