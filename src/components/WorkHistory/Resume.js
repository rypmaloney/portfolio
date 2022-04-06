import { React, useState } from 'react';
import Education from './Education';
import Experience from './Experience';
import './WorkHistory.css';

const Resume = (props) => {
    const [name, setName] = useState('Ryan Maloney');
    const [address, setAddress] = useState('Watertown, MA');
    const [email, setEmail] = useState('rypmaloney@gmail.com');
    const [education, setEducation] = useState([
        {
            institution: 'UMass Amherst',
            year: '2013-2016',
            details:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
        },
    ]);
    const [experience, setExperience] = useState([
        {
            institution: 'CMSA',
            year: '2017-2021',
            details:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
        },
        {
            institution: 'CMSA',
            year: '2017-2021',
            details:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
        },
        {
            institution: 'CMSA',
            year: '2017-2021',
            details:
                'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
        },
    ]);

    return (
        <div>
            <div className='contact-display'>
                <h1>{name}</h1>
                <div>
                    <p>{address}</p>
                    <p>{email}</p>
                </div>
            </div>
            <hr />
            <div className='edex-display'>
                <h2>Education</h2>
                {education.map((edu) => {
                    return <Education key={edu.id} school={edu} />;
                })}
            </div>
            <hr />
            <div className='edex-display'>
                <h2>Experience</h2>

                {experience.map((exp) => {
                    return <Experience key={exp.id} experience={exp} />;
                })}
            </div>
        </div>
    );
};

export default Resume;
