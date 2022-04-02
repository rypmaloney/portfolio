import Blogs from './Blogs';
import Projects from './Projects';

const MainContent = (props) => {
    if (props.selectedContent === 'projects') {
        return (
            <div className='content'>
                <Projects />
            </div>
        );
    } else if (props.selectedContent === 'blogs') {
        return (
            <div className='content'>
                <Blogs />
            </div>
        );
    } else {
        return (
            <div className='content'>
                <Projects />
            </div>
        );
    }
};

export default MainContent;
