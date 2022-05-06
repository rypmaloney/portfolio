import React from 'react';

const Experience = (props) => {
    return (
        <div>
            <div className='institution'>
                <div className='edex-title'>
                    <h3>{props.experience.institution}</h3>
                    <p>{props.experience.year}</p>
                </div>
                <ul>
                    {props.experience.details.map((detail) => {
                        return <li>{detail}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
