import React from 'react';
import { links } from './constants/links'
import { boxItems } from './constants/boxItems'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

import NavContainer from './components/NavContainer';
import KnowMoreContainer from './components/KnowMoreContainer';
import KnowMoreContainerTwo from './components/KnowMoreContainerTwo';
import BoxItemContainer from './components/BoxItemContainer';
import FooterContainer from './components/FooterContainer';


function App() {
  return (
    <div>
      <Grid>
        <NavContainer links={links} />
        <KnowMoreContainer
          title={`Todas tus Suscripciones en una sola Caja`}
          description={"Administra todas tus suscripciones desde un solo lugar y paga solo un envío por todas."}
        />
        <BoxItemContainer boxItems={boxItems} />
        <KnowMoreContainerTwo
          title={`Invierte tu tiempo en cosas más importantes`}
          description={"Cuboxes agiliza la administración de tus recurrencias, haciendote una sola factura y un solo envío para que no tengas que preocuparte por nada mas."}
        />
      </Grid>
    <FooterContainer />

    </div>
  );
}

export default App;
