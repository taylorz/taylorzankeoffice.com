
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './About.scss';
import PageContainer from '../../components/PageContainer/PageContainer'

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

const About = () => (
  <PageContainer className="about">
    <Grid container>
      <Grid item xs={12} sm={4} className="spacer"/>
      <Grid item xs={12} sm={8} md={6} lg={5} xl={4} className="description">
        <div className="header">Introduction</div>
        <p>Taylor Zanke Office is the independent design practice of artist <a href="http://taylorzanke.com">Taylor Zanke</a>. The practice operates across disciplinary boundaries and looks for opportunities to translate knowledge and understanding with fluidity and dexterity. Taylor is interested in developing collaborations and partnerships with individuals or institutions to communicate, define, and present ideas, stories, and values. A focus on engaging in contemporary culture encourages broad consideration of the media and format of communication and representation: developing ways of meeting an audience or expressing relevance that are unexpected. Taylor has a particular interest in the process of designing and its potential to provide a reflective context for all stakeholders by helping to translate sensibilities and concepts into form.</p>
        <p>Taylor has worked as a designer and project manager for startups and agencies in New York City across numerous media and contexts. He received a B.F.A. from Parsons the New School for Design, and a M.Arch and M.S. from Columbia University.</p>
        <div className="header">Capabilities</div>
        <p>This office provides services across numerous media. Capabilities are listed below, and can be extended through a network of close collaborators in order to meet each project’s requirements.</p>
        <ul>
          <li>Architecturural design and spatial analysis</li>
          <li>Real estate and financial analysis</li>
          <li>Book, editorial, and publication design</li>
          <li>Creative direction and art direction</li>
          <li>Website and interface design</li>
          <li>Front-end website development</li>
          <li>Website content direction and management</li>
          <li>Identity systems and programs</li>
          <li>Brand strategy and research</li>
        </ul>
        <div className="header">Clients, projects, and collaborations</div>
        <ul>
          {PARTNERSHIPS
            .sort(dynamicSort("partnerName"))
            .map(p =>
            <li>{p.partnerName}</li>
          )}
        </ul>
      </Grid>
    </Grid>
  </PageContainer>
);

export default About;
