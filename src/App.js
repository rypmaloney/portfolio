import './App.css';
import Title from './components/Title';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import { useState } from 'react';
import Projects from './components/Projects';

const App = () => {
    const [selectedContent, setSelectedContent] = useState('');
    const [headerHidden, setHeaderHidden] = useState(false);

    return (
        <div className='App'>
            <Title headerHidden={headerHidden} />
            <Menu
                setSelectedContent={setSelectedContent}
                selectedContent={selectedContent}
                setHeaderHidden={setHeaderHidden}
            />
            <MainContent selectedContent={selectedContent} />
        </div>
    );
};

export default App;
