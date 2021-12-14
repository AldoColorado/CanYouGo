import React from "react";
import './primaryButton.css'

interface ButtonProps{
    name:string
}

const PrimaryButton=(params:ButtonProps)=>{
    const {name}= params;
    return(
        <React.Fragment>
            <div className="primary-button">{name}</div>
        </React.Fragment>
    )
}
export default PrimaryButton;