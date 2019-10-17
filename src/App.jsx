import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { createBrowserHistory } from 'history';

import { CollapseState, OpenSidebarState } from './context/index'

// Material helpers
import { ThemeProvider } from '@material-ui/styles';

// Theme
import theme from './theme';

// Styles
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

// Routes
import Routes from './Routes';

// Browser history
const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <OpenSidebarState>
        <CollapseState>
          <DndProvider backend={HTML5Backend}>
            <ThemeProvider theme={theme}>
              <Router history={browserHistory}>
                <Routes />
              </Router>
            </ThemeProvider>
          </DndProvider>
        </CollapseState>
      </OpenSidebarState>
    );
  }
}
