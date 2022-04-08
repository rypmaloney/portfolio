import './About.css';
import me from '../../images/me.jpeg';
import WelcomeTyping from './WelcomeTyping';

const About = () => {
    return (
        <div className='about'>
            <div className='bio-wrapper'>
                <img className='me' src={me}></img>
                <div className='bio'>
                    <WelcomeTyping />
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

export default About;
