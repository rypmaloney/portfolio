import React from 'react';

const Experience = (props) => {
    return (
        <div>
            <div className='institution'>
                <div className='edex-title'>
                    <h3>{props.experience.institution}</h3>
                    <p>{props.experience.year}</p>
                </div>

                <p>{props.experience.details}</p>
            </div>
        </div>
    );
};

export default Experience;
