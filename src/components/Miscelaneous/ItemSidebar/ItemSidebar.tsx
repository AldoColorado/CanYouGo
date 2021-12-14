import React from "react";
import { ItemSidebarProps } from "../../../models/ItemSidebarProps";
import './item-sidebar.css'
const ItemSidebar=(props:ItemSidebarProps)=>{
    const {icon,name} = props;
    return(
        <React.Fragment>
            <div className="item-sidebar">
                <div>{icon}</div>
                <div className="name">{name}</div>
            </div>
        </React.Fragment>
    )
}
export default ItemSidebar;