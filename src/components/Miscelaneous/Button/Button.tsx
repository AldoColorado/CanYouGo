import React from "react";
import './button.css'
interface ButtonProps{
name:string
}
const Button=(params:ButtonProps)=>{
    const {name}= params;
    return(
        <React.Fragment>
            <div className="button">{name}</div>
        </React.Fragment>
    )
}
export default Button;