import React from 'react';

import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Grid container direction="column">
      <Grid container direction="row" className="nav-container">
        <Grid item md={2}>
          <Link to="/factory">Factory Method</Link>
        </Grid>
        <Grid item md={2}>
          <Link to="/abstract-factory">Abstract Factory</Link>
        </Grid>
        <Grid item md={2}>
          <Link to="/singleton">Singleton</Link>
        </Grid>
      </Grid>
      <Outlet />
    </Grid>
  );
};

export default App;
