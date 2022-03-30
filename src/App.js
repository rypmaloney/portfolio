import './App.css';
import Bio from './components/Bio';
import Menu from './components/Menu';
import Blogs from './components/Blogs';
import { useState } from 'react';
import Projects from './components/Projects';

const App = () => {
    const [menuSelect, setMenuSelect] = useState('projects');

    return (
        <div className='App'>
            <Bio />
            <Menu />
            <Blogs />
            <Projects />
        </div>
    );
};

export default App;
