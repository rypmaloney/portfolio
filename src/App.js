import './App.css';
import Bio from './components/Bio';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import { useState } from 'react';
import Projects from './components/Projects';

const App = () => {
    const [selectedContent, setSelectedContent] = useState('projects');

    return (
        <div className='App'>
            <Bio />
            <Menu setSelectedContent={setSelectedContent} />
            <MainContent selectedContent={selectedContent} />
        </div>
    );
};

export default App;
