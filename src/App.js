import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavContainer from './components/NavContainer';
import { links } from './components/constants/links'
import { Grid } from 'react-flexbox-grid';


function App() {
  return (
    <Grid>
      <NavContainer links={links}></NavContainer>
    </Grid>
  );
}

export default App;
