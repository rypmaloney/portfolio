import Blogs from './Blogs';
import Projects from './Projects';
import Experience from './Experience';

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
                <Experience />
            </div>
        );
    }
};

export default MainContent;
