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
                'Bachelors degree in English. Thesis in Postmodern Literature',
        },
    ]);
    const [experience, setExperience] = useState([
        {
            institution: 'Fihtank Learning',
            year: '2021-Present',
            details:
                'Manages the development of new website features and resources for the Fishtank Learning website. Identifies product improvements and plans out, executes, and oversees related projects. Plans and oversee changes to both the back end and front end of the Fishtank Learning website. Coordinates the development team through Jira.',
        },
        {
            institution: 'CMSA',
            year: '2017-2021',
            details:
                'Coordinates web presence on multiple sites, producing general content and design. Assists editor-in-chief, and coordinates production process of all Center publications. Produces digital and print content for a variety of stakeholders, including donors, faculty, and staff. Films, produces, and edits promotional interviews with visitors, postdocs, and faculty',
        },
        {
            institution: 'Umass Scholarly Communications',
            year: '2015-2016',
            details:
                'Worked on grant proposal process and implementation of  the Outernet Project, providing open access educational materials to internet poor communities. Oversaw the migration of UMass Center for International Education to the repository.',
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
                <h2>Experience</h2>

                {experience.map((exp) => {
                    return <Experience key={exp.id} experience={exp} />;
                })}
            </div>
            <hr />

            <div className='edex-display'>
                <h2>Education</h2>
                {education.map((edu) => {
                    return <Education key={edu.id} school={edu} />;
                })}
            </div>
        </div>
    );
};

export default Resume;
