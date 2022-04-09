import './Projects.css';
import ImageCarousel from './ImageCarousel';
import CMS_login from '../../images/CMS_login.png';
import CMS_update from '../../images/CMS_update.png';
import PF_board from '../../images/PF_board.png';
import PF_post from '../../images/PF_post.png';
import WORDLE_dark from '../../images/WORDLE_dark.png';
import WORDLE_light from '../../images/WORDLE_light.png';
import BS_game from '../../images/BS_game.png';
import BS_place from '../../images/BS_place.png';

const Projects = () => {
    return (
        <div className='projects'>
            <div className='projects_container'>
                <div className='project project_1'>
                    <div className='project_info'>
                        <h2>Blog API and CMS</h2>
                        <p>
                            The core of the project is an API to fetch and
                            create blog posts. Part of a jamstack application
                            made up of a CMS, the API, and a frontend to display
                            posts.
                        </p>
                        <p class='project-tools'>
                            API with Node.JS and Express, authenticates with
                            JWT, CMS with React and Tailwind
                        </p>
                        <div className='project-btns'>
                            <a href='https://rypmaloney.github.io/blog-cms'>
                                <button>Live Preivew</button>
                            </a>
                            <a href='https://github.com/rypmaloney/blog-cms'>
                                <button>Repository</button>
                            </a>
                        </div>
                    </div>

                    <ImageCarousel imgOne={CMS_login} imgTwo={CMS_update} />
                </div>
                <div className='project project_2'>
                    <div className='project_info'>
                        <h2>Wordle Unlimited</h2>
                        <p>
                            This is a simple wordle clone using CRA and
                            tailwind. I used HeadlessUI for toggle and modal
                            components.
                        </p>
                        <p class='project-tools'>
                            React, Tailwind, and HeadlessUI
                        </p>
                        <div className='project-btns'>
                            <a href='https://rypmaloney.github.io/wordle-unlimited/'>
                                <button>Live Preivew</button>
                            </a>
                            <a href='https://github.com/rypmaloney/wordle-unlimited'>
                                <button>Repository</button>
                            </a>
                        </div>
                    </div>

                    <ImageCarousel imgOne={WORDLE_dark} imgTwo={WORDLE_light} />
                </div>

                <div className='project project_3'>
                    <div className='project_info'>
                        <h2>Private Forum</h2>
                        <p>
                            This app is a small private forum where users can
                            create an account, log in, and upvote on posts
                            (without refreshing the page).
                        </p>
                        <p class='project-tools'>
                            Node.JS, Express, and EJS. Passport/bycript for
                            authenticated user sessions
                        </p>

                        <div className='project-btns'>
                            <a href='https://private-forum.herokuapp.com/'>
                                <button>Live Preivew *</button>
                            </a>
                            <a href='https://github.com/rypmaloney/private-message-board'>
                                <button>Repository</button>
                            </a>
                        </div>
                        <p className='note'>
                            * This is hosted through a free Heroku plan, it may
                            take a second to spin up.
                        </p>
                    </div>

                    <ImageCarousel imgOne={PF_board} imgTwo={PF_post} />
                </div>
                <div className='project project_4'>
                    <div className='project_info'>
                        <h2>Test Driven Battleship</h2>
                        <p>
                            This project is a battleship game created through
                            test driven development (using Jest). I tried to
                            spend a bulk of time at the beginning unit testing
                            all of my functions before creating them.
                        </p>

                        <p class='project-tools'>
                            Vanilla HTML, CSS, and JavaScript
                        </p>
                        <div className='project-btns'>
                            <a href='https://htmlpreview.github.io/?https://github.com/rypmaloney/battleship/blob/d7692551195a415232b57179286f1f455607c69c/dist/index.html'>
                                <button>Live Preivew</button>
                            </a>
                            <a href='https://github.com/rypmaloney/battleship'>
                                <button>Repository</button>
                            </a>
                        </div>
                    </div>

                    <ImageCarousel imgOne={BS_game} imgTwo={BS_place} />
                </div>
            </div>
        </div>
    );
};

export default Projects;
