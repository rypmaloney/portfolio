import { useState } from 'react';
import './WorkHistory.css';
import Resume from './Resume';
import pdf from '../../images/Resume_2021.pdf';

const WorkHistory = () => {
    return (
        <div className='WorkHistory-wrapper'>
            <div className='display'>
                <Resume />
            </div>
            <a
                className='download'
                href={pdf}
                without
                rel='noopener noreferrer'
                target='_blank'
            >
                Download Full Resume
            </a>
        </div>
    );
};

export default WorkHistory;
