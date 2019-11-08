import React from 'react';
import logo from './logo.svg';
import { links } from './constants/links'
import { boxItems } from './constants/boxItems'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

import NavContainer from './components/NavContainer';
import KnowMoreContainer from './components/KnowMoreContainer';
import BoxItemContainer from './components/BoxItemContainer';


function App() {
  return (
    <Grid>
      <NavContainer links={links} />
      <KnowMoreContainer />
      <BoxItemContainer boxItems={boxItems} />
    </Grid>

  );
}

export default App;
