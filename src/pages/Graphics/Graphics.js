
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Graphics.scss';
import PageContainer from '../../components/PageContainer/PageContainer'

import graphic1 from '../../assets/images/scans/1.jpg'
import graphic2 from '../../assets/images/scans/2.jpg'
import graphic3 from '../../assets/images/scans/3.jpg'
import graphic4 from '../../assets/images/scans/4.jpg'

const Graphics = () => (
  <PageContainer className="graphics">
    <Grid container>

      <Grid container>
        <Grid item xs={12} md={4}>
          Taylor Zanke Office
        </Grid>
        <Grid item xs={12} md={4}>
          GRAPHIC DESIGN
        </Grid>
        <Grid item xs={12} md={4}>
          Los Angeles, CA
        </Grid>

      </Grid>

      <Grid item xs={12}>
        <img src={graphic1} className="graphic-image"/>
      </Grid>

<Grid container>
      <Grid item xs={12} md={4}>
       <p>INTRODUCTION</p>
      </Grid>
      <Grid item xs={12} md={8}>
      <p>
      Taylor Zanke Office is the independent design practice of artist Taylor Zanke. The practice operates across disciplinary boundaries and looks for opportunities to translate knowledge and understanding between subject matter with fluidity and dexterity. Taylor is interested in developing collaborations and partnerships with individuals or institutions to communicate, define, and present ideas, stories, and values.
      </p>
      </Grid>
      <Grid item xx={12}>
        <p>

      A focus on engaging in contemporary culture encourages broad consideration of the media and format of communication and representation: developing ways of meeting an audience or expressing relevance that are unexpected. Taylor has a particular interest in the process of designing and its potential to provide a reflective context for all stakeholders by helping to translate sensibilities and concepts into form.
        </p>
      </Grid>

</Grid>

      <Grid item xs={12}>
        <img src={graphic2} className="graphic-image"/>
      </Grid>

      <Grid container>
      <Grid item xs={12} md={4}>
        <p>CAPABILITIES</p>
      </Grid>
      <Grid item xs={12} md={8}>
        <p>

      This office provides services across numerous media. Capabilities are listed below, and can be extended through a network of close collaborators in order to meet each project’s requirements.
        </p>
      </Grid>
      <Grid item xs={12}>
      <ul>
            <li>Architectural design and spatial planning</li>
            <li>Real estate and financial analysis</li>
            <li>Book, editorial, and publication design</li>
            <li>Creative direction and art direction</li>
            <li>Website and interface design</li>
            <li>Front-end website development</li>
            <li>Website content direction and management</li>
            <li>Identity systems and programs</li>
            <li>Brand strategy and research</li>
          </ul>
      </Grid>

</Grid>



      <Grid item xs={12}>
        <img src={graphic3} className="graphic-image"/>
      </Grid>
      {/* <Grid item xs={12}>
        <img src={graphic4} className="graphic-image"/>
      </Grid> */}
    </Grid>
  </PageContainer>
);

export default Graphics;
