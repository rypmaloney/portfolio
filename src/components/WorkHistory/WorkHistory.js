import { useState } from 'react';
import './WorkHistory.css';
import Resume from './Resume';

const WorkHistory = () => {
    return (
        <div className='WorkHistory-wrapper'>
            <div className='display'>
                <Resume />
            </div>
        </div>
    );
};

export default WorkHistory;
