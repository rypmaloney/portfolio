const Education = (props) => {
    return (
        <div>
            <div className='institution'>
                <div className='edex-title'>
                    <h3>{props.school.institution}</h3>
                    <p>{props.school.year}</p>
                </div>

                <p>{props.school.details}</p>
            </div>
        </div>
    );
};

export default Education;
