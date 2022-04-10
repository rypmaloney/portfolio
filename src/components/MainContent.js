import Projects from './Projects/Projects';
import About from './About/About';
import WorkHistory from './WorkHistory/WorkHistory';
import { useState, useEffect } from 'react';
import './MainContent.css';
import StarField from './StarField/StarField';

const MainContent = (props) => {
    const [posts, setPosts] = useState(false);

    //This is in this component and not Blogs so that the data is ready and waiting by the time a user clicks on it
    const getPosts = async () => {
        try {
            const res = await fetch(
                'http://localhost:3000/api/posts/' //'https://obscure-wildwood-18149.herokuapp.com/api/posts/ '
            );
            if (res.status !== 200) {
                console.log(res.status);
                setPosts(false);
            } else {
                const posts = await res.json();
                setPosts(posts);
            }
        } catch (err) {
            setPosts(false);
            console.log(err);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    if (props.selectedContent === 'projects') {
        return (
            <div className='content'>
                <Projects />
            </div>
        );
    } else if (props.selectedContent === 'about') {
        return (
            <div className='content'>
                <About setSelectedContent={props.setSelectedContent} />
            </div>
        );
    } else if (props.selectedContent === 'experience') {
        return (
            <div className='content'>
                <WorkHistory />
            </div>
        );
    } else {
        return <div className=''></div>;
    }
};

export default MainContent;
