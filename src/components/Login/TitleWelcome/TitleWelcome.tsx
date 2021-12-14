import React from 'react';
import './titleWelcome.css'

const TitleWelcome = ({ text }: {text: string}) => {

    return (
        <div className='tittle-container'>
            <h1 className='tittleWelcome-label'> {text} </h1>
        </div>
    )
};

export default TitleWelcome;