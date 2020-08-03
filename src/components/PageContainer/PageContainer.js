import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Div100vh from 'react-div-100vh'

import './PageContainer.scss'

const PageContainer = ({ children, className }) => (
  <Div100vh
    style={{
      height: `calc(100% - 80px`
    }}
  >
    <Grid container xs={12} className={`page-container ${className}`}>
        {children}
    </Grid>
  </Div100vh>
)

export default PageContainer;
