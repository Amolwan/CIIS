import React, { useState } from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
//import logo from './logo.svg';
import './App.scss';
import MainContent from './layout/main/MainContent'
import { GlobalAppContext } from './context';
import SideBarMenu from './layout/sidebar/SideBarMenu';

function App() {
  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);

  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";
  
  return (
    <Router>
      <GlobalAppContext.Provider
        value={{toggled, setToggled, hasBackground, setHasBackground}}  
      >
          <div className={"page-wrapper default-theme bg2 "+ style  }>
          {/* <SideBarMenu/> */}
          <MainContent />
        </div>
      </GlobalAppContext.Provider>
    </Router>
  );
}

export default App;



 
