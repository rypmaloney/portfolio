import '../styles/Menu.css';

const Menu = (props) => {
    const { selectedContent, setSelectedContent, setHeaderHidden } = props;
    return (
        <div className='menu'>
            <hr></hr>
            <ul>
                <li>
                    <a
                        onClick={() => {
                            setSelectedContent('projects');
                            setHeaderHidden(true);
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
                            setHeaderHidden(true);
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
                            setHeaderHidden(true);
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
