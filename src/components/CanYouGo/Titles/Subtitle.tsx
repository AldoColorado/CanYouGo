import React from 'react';
import './subtitle.css'

const Subtitle = ({ text }: {text: string}) => {

    return (
        <div className='subtitlecontainer'>
            <h3 className='subtitle-label'> {text} </h3>
        </div>
    )
};

export default Subtitle;