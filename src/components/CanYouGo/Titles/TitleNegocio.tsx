import React from 'react';
import './titleNegocio.css'


const TitleNegocio = ({ text }: {text: string}) => {

    return (
        <div className='tnegociocontainer'>
            <h1 className='tnegocio-label'> {text} </h1>
        </div>
    )
};

export default TitleNegocio;