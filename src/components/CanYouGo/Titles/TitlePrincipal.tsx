import React from 'react';
import './titlePrincipal.css'

const TitlePrincipal = ({ text }: {text: string}) => {

    return (
        <div className='tittlemenu-container'>
            <h1 className='tittlemenu-label'> {text} </h1>
        </div>
    )
};

export default TitlePrincipal;