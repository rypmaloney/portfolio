import '../styles/Menu.css';

const Menu = (props) => {
    const setSelectedContent = props.setSelectedContent;
    return (
        <div className='menu'>
            <hr></hr>
            <ul>
                <li>
                    <a
                        onClick={() => {
                            setSelectedContent('projects');
                        }}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            setSelectedContent('blogs');
                            console.log('this');
                        }}
                    >
                        Blog Posts
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            setSelectedContent('');
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
