import React from 'react';
import './title.css'

const Title = ({ text }: {text: string}) => {

    return (
        <div className='tittle-container'>
            <h1 className='tittle-label'> {text} </h1>
        </div>
    )
};

export default Title;