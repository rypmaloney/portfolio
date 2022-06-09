import React from 'react';
import uniqid from 'uniqid';

const Experience = (props) => {
  return (
    <div>
      <div className="institution">
        <div className="edex-title">
          <h3>{props.experience.institution}</h3>
          <p>{props.experience.year}</p>
        </div>
        <ul>
          {props.experience.details.map((detail) => {
            return <li key={uniqid()}>{detail}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
