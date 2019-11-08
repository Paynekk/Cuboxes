import React from 'react';
import logo from './logo.svg';
import { links } from './components/constants/links'
import { Grid } from 'react-flexbox-grid';
import './App.css';

import NavContainer from './components/NavContainer';
import KnowMoreContainer from './components/KnowMoreContainer';




function App() {
  return (
    <Grid>
      <NavContainer links={links}/>
      <KnowMoreContainer/>
    </Grid>
    
  );
}

export default App;
