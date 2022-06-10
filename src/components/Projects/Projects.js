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
import grouper_full from '../../images/grouper_full.jpg';
import grouper_close from '../../images/grouper_close.png';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_container">
        <div className="project project_0">
          <div className="project_info">
            <h2>
              <a href="https://grouper-generator.netlify.app/" target="blank">
                Grouper
              </a>
            </h2>
            <p>
              Generate groups of people with a minimum number of repeat group compositions. Grouper
              identifies the number of times each pair of individuals has been grouped together, and
              attempts to create groups with the lowest number of previously paired individuals.
            </p>
            <p className="project-tools">React, SASS, and tests with Jest</p>
            <div className="project-btns">
              <a href="https://grouper-generator.netlify.app/" target="blank">
                <button>Live Preivew</button>
              </a>
              <a href="https://github.com/rypmaloney/group-generator" target="blank">
                <button>Repository</button>
              </a>
            </div>
          </div>

          <ImageCarousel
            imgOne={{
              img: grouper_full,
              alt: 'Full grouper app.',
              loading: 'eager'
            }}
            imgTwo={{
              img: grouper_close,
              alt: 'close-up grouper app.'
            }}
          />
        </div>
        <div className="project project_1">
          <div className="project_info">
            <h2>
              <a href="https://rypmaloney.github.io/wordle-unlimited/" target="blank">
                Wordle Unlimited
              </a>
            </h2>
            <p>
              A Wordle clone using CRA and Tailwind and HeadlesUI. Runs off an Express API and grows
              a Postgres database. Word list is dynamically updated based on common user guesses.
            </p>
            <p className="project-tools">React, Tailwind, HeadlessUI, NodeJS, Express, Postgres</p>
            <div className="project-btns">
              <a href="https://rypmaloney.github.io/wordle-unlimited/" target="blank">
                <button>Live Preivew</button>
              </a>
              <a href="https://github.com/rypmaloney/wordle-unlimited" target="blank">
                <button>Repository</button>
              </a>
            </div>
          </div>

          <ImageCarousel
            imgOne={{
              img: WORDLE_dark,
              alt: 'Wordle game in dark mode.',
              loading: 'lazy'
            }}
            imgTwo={{
              img: WORDLE_light,
              alt: 'Wordle unlimited in light mode'
            }}
          />
        </div>
        <div className="project project_2">
          <div className="project_info">
            <h2>
              <a href="https://github.com/rypmaloney/blog-cms" target="blank">
                Blog API and CMS
              </a>
            </h2>
            <p>
              The core of this project is an API to fetch and create blog posts. Part of a jamstack
              application made up of a CMS, the API, and a frontend to display posts.
            </p>
            <p className="project-tools">
              API with Node.JS, Express, and MongoDB--authenticates with JWT, CMS with React and
              Tailwind
            </p>
            <div className="project-btns">
              <a href="https://rypmaloney.github.io/blog-cms" target="blank">
                <button>Live Preivew</button>
              </a>
              <a href="https://github.com/rypmaloney/blog-cms" target="blank">
                <button>Repository</button>
              </a>
            </div>
          </div>

          <ImageCarousel
            imgOne={{ img: CMS_login, alt: 'Login screen for CMS', loading: 'lazy' }}
            imgTwo={{
              img: CMS_update,
              alt: 'Update post page for CMS'
            }}
          />
        </div>

        <div className="project project_3">
          <div className="project_info">
            <h2>
              <a href="https://github.com/rypmaloney/private-message-board" target="blank">
                Private Forum
              </a>
            </h2>
            <p>
              This app is a small private forum where users can create an account, log in, and
              upvote on posts (without refreshing the page).
            </p>
            <p className="project-tools">
              Node.JS, Express, and EJS. Passport/bycript for authenticated user sessions
            </p>

            <div className="project-btns">
              <a href="https://private-forum.herokuapp.com/" target="blank">
                <button>Live Preivew *</button>
              </a>
              <a href="https://github.com/rypmaloney/private-message-board" target="blank">
                <button>Repository</button>
              </a>
            </div>
            <p className="note">
              * This is hosted through a free Heroku plan, it may take a second to spin up.
            </p>
          </div>

          <ImageCarousel
            imgOne={{
              img: PF_board,
              alt: 'Private forum post board',
              loading: 'lazy'
            }}
            imgTwo={{ img: PF_post, alt: 'Individual post' }}
          />
        </div>
        <div className="project project_4">
          <div className="project_info">
            <h2>
              <a href="https://github.com/rypmaloney/battleship" target="blank">
                Test Driven Battleship
              </a>
            </h2>
            <p>
              This project is a battleship game created through test driven development (using
              Jest). I tried to spend a bulk of time at the beginning unit testing all of my
              functions before creating them.
            </p>

            <p className="project-tools">Vanilla HTML, CSS, JavaScript and Webpack</p>
            <div className="project-btns">
              <a
                href="https://htmlpreview.github.io/?https://github.com/rypmaloney/battleship/blob/d7692551195a415232b57179286f1f455607c69c/dist/index.html"
                target="blank">
                <button>Live Preivew</button>
              </a>
              <a href="https://github.com/rypmaloney/battleship" target="blank">
                <button>Repository</button>
              </a>
            </div>
          </div>

          <ImageCarousel
            imgOne={{ img: BS_game, alt: 'Battleship game', loading: 'lazy' }}
            imgTwo={{ img: BS_place, alt: 'Placing ships' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
