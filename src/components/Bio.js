import '../styles/Bio.css';
import Menu from './Menu';

const Bio = () => {
    return (
        <div className='header'>
            <div className='bio'>
                <div className='title-wrapper'>
                    <div className='headshot'></div>
                    <div className='title'>
                        <h1>Ryan Maloney</h1>
                        <h2>Web Developer</h2>
                    </div>
                </div>
                <div className='about-me'>
                    <p>
                        Highly motivated publishing professional with interest
                        in technical communications and front-end web
                        development. Professional experience in web management
                        and design, supervising peer review and publication, and
                        supporting faculty. Strong interpersonal, communication,
                        and design skills.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bio;
