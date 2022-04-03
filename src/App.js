import './App.css';
import Bio from './components/Bio';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import { useState } from 'react';
import Projects from './components/Projects';

const App = () => {
    const [selectedContent, setSelectedContent] = useState('experience');

    return (
        <div className='App'>
            <Bio />
            <Menu
                setSelectedContent={setSelectedContent}
                selectedContent={selectedContent}
            />
            <MainContent selectedContent={selectedContent} />
        </div>
    );
};

export default App;
