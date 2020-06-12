import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './PageContainer.scss'

const PageContainer = ({ children, className }) => (
  <Grid container xs={12} className={`page-container ${className}`}>
    {children}
  </Grid>
)

export default PageContainer;
