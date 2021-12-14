import React, { ReactNode } from "react";
import './customInput.css'

const CustomInput = ({input, icon}: {input: ReactNode | ReactNode[], icon: ReactNode| ReactNode[]}) => {

    return (
        <div className="custom-input">
            <div>
                {icon}
            </div>
            <div className="input"> 
                {input}
            </div>
        </div>
    )

}

export default CustomInput;