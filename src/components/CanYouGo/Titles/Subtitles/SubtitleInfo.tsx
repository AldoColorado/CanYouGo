import React from 'react';
import './SubtitleInfo.css'

const SubtitleInfo = ({ text }: {text: string}) => {

    return (
        <div className='subtitleinfocontainer'>
            <h2 className='subtitleinfo-label'> {text} </h2>
        </div>
    )
};

export default SubtitleInfo;