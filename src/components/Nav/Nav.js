import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './Nav.scss';

const Nav = () => (
  <nav className={`nav-container`}>
    <Grid container className="nav-contents" alignItems="center">
      <Grid item xs={12} sm={4} className="logotype"><NavLink exact to="/">Taylor Zanke Office</NavLink></Grid>
      <Grid item xs={12} sm={4} className="nav-items">
        <ul>
          <li><NavLink exact to="/" className="page-link" activeClassName="page-link-active">Projects</NavLink></li>
          <li><NavLink exact to="/about" className="page-link" activeClassName="page-link-active">About</NavLink></li>
          <li><NavLink to="/contact" className="page-link" activeClassName="page-link-active">Contact</NavLink></li>
        </ul>
      </Grid>
    </Grid>
  </nav>
) 

export default Nav;
