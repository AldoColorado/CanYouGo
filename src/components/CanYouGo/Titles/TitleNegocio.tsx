import React from 'react';
import './titleNegocio.css'


const TitleNegocio = ({ text }: {text: string}) => {

    return (
        <div className='tnegociocontainer'>
            <h2 className='tnegocio-label'> {text} </h2>
        </div>
    )
};

export default TitleNegocio;