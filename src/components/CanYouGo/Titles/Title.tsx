import React from 'react';
import './titleMenu.css'

const TitleMenu = ({ text }: {text: string}) => {

    return (
        <div className='tittlemenu-container'>
            <h1 className='tittlemenu-label'> {text} </h1>
        </div>
    )
};

export default TitleMenu;