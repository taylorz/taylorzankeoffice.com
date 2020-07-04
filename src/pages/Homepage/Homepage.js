
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Slideshow from '../../components/Slideshow/Slideshow'

import PARTNERSHIPS from '../../constants/partnerships'

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }
    }
}

const Homepage = () => (
  <PageContainer className="homepage">
    <Grid container>
      <Grid item xs={12} sm={4} className="spacer"/>
      <Grid item xs={12} sm={8} className="slideshow">
        <Slideshow/>
      </Grid>
    </Grid>
  </PageContainer>
);

export default Homepage;
