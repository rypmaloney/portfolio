import './App.css';
import Title from './components/TitlePage/Title';
import Menu from './components/Menu/Menu';
import MainContent from './components/MainContent';
import { useState } from 'react';
import Projects from './components/Projects/Projects';
import StarField from './components/StarField/StarField';

const App = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [headerHidden, setHeaderHidden] = useState(false);

  return (
    <div className="App">
      <Title headerHidden={headerHidden} />
      <Menu
        setSelectedContent={setSelectedContent}
        selectedContent={selectedContent}
        setHeaderHidden={setHeaderHidden}
      />
      <MainContent selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
      <StarField selectedContent={selectedContent} />
    </div>
  );
};

export default App;
