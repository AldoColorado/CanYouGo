import React from 'react';
import './titleMenu.css'

const TitleMenu = ({ text }: {text: string}) => {

    return (
        <div className='tittlemenu-container'>
            <h2 className='tittlemenu-label'> {text} </h2>
        </div>
    )
};

export default TitleMenu;