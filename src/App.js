import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Nav from './components/Nav/Nav'
import './styles/styles.scss';
import Home from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Graphics from './pages/Graphics/Graphics';
import './App.css';

const routes = [
  { path: '/', name: 'Home', Component: Graphics },
  // { path: '/about', name: 'About', Component: About },
  // +
]

class App extends Component {
  render() {
    return (
      <div className="App" >

      <Router>
          <ScrollToTop/>
          {/* <Nav/> */}
          <Route render={({location}) => {
            const { key } = location
            return (
              <>
                <TransitionGroup component={null}>
                  <CSSTransition
                    key={key}
                    appear={true}
                    classNames="my-node"
                    timeout={{enter: 1000, exit: 500}}
                  >
                    <Switch location={location}>
                      {routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                          {({ match }) => (
                            <div className="my-node">
                              <Component />
                            </div>
                          )}
                        </Route>
                      ))}
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </>
            )
          }}/>
        </Router>
      </div>
    );
  }
}

export default App;
