import '../styles/Menu.css';

const Menu = (props) => {
    const { selectedContent, setSelectedContent } = props;
    return (
        <div className='menu'>
            <hr></hr>
            <ul>
                <li>
                    <a
                        onClick={() => {
                            setSelectedContent('projects');
                        }}
                        className={
                            selectedContent === 'projects' ? 'selected' : ''
                        }
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            setSelectedContent('experience');
                        }}
                        className={
                            selectedContent === 'experience' ? 'selected' : ''
                        }
                    >
                        Experience
                    </a>
                </li>

                <li>
                    <a
                        onClick={() => {
                            setSelectedContent('blogs');
                        }}
                        className={
                            selectedContent === 'blogs' ? 'selected' : ''
                        }
                    >
                        Blog
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
