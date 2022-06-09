import Projects from './Projects/Projects';
import About from './About/About';
import WorkHistory from './WorkHistory/WorkHistory';
import { useState, useEffect } from 'react';
import './MainContent.css';
import StarField from './StarField/StarField';

const MainContent = (props) => {
  if (props.selectedContent === 'projects') {
    return (
      <div className="content">
        <Projects />
      </div>
    );
  } else if (props.selectedContent === 'about') {
    return (
      <div className="content">
        <About setSelectedContent={props.setSelectedContent} />
      </div>
    );
  } else if (props.selectedContent === 'experience') {
    return (
      <div className="content">
        <WorkHistory />
      </div>
    );
  } else {
    return <div className=""></div>;
  }
};

export default MainContent;
