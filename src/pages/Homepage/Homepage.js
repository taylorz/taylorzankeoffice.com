
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';

class Homepage extends Component {
  render() {
    return (
      <Grid container className="homepage">
        <Grid item xs={12} sm={4} className="title">Taylor Zanke Office</Grid>
        <Grid item xs={12} sm={4} className="description">
          <div className="header">About</div>
          <p>Taylor Zanke Office is the independent design practice of artist <a href="http://taylorzanke.com">Taylor Zanke</a>. The practice is interested in developing collaborations and partnerships with individuals or institutions to communicate, define, and present ideas, stories, and values. Taylor has a particular interest in the process of designing and its potential to provide a context of self-reflexivity for both the designer and client: by helping to translate sensibilities and concepts into form.</p>
          <p>Taylor has worked as a designer and project manager for startups and agencies in New York City across numerous media. He received a B.F.A. from Parsons the New School for Design, and a M.Arch and M.S. from Columbia University.</p>
          <div className="header">Capabilities</div>
          <p>This office offers services across numerous media which often fall under the categorizations of digital design, graphic design, or art direction. Capabilities are listed below, and can be extended through a network of close collaborators in order to meet each project’s requirements.</p>
          <ul>
            <li>Website and interface design</li>
            <li>Front-end website development</li>
            <li>Book, editorial, and publication design</li>
            <li>Identity systems and programs</li>
            <li>Brand strategy and research</li>
            <li>Creative direction and art direction</li>
          </ul>
          <div className="header">Contact</div>
          <p>Taylor Zanke<br/>Los Angeles, CA</p>
          <p>taylor@taylorzankeoffice.com<br/>+1 917 826 7277</p>
        </Grid>
      </Grid>
    );
  }
}

export default Homepage;
