import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <Grid container className="contact">
        <Grid item xs={12} sm={4} className="spacer"/>
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4} className="description">
          <p>Taylor Zanke<br/>Los Angeles, CA</p>
          <p>taylor@taylorzankeoffice.com<br/>+ 1 917 826 7277</p>
        </Grid>
      </Grid>
    );
  }
}

export default Contact;
