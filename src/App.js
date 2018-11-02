import React, { Component, Fragment } from 'react';
import HomePage from './Pages/HomePage';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ scrollDuration: 500 });

class App extends Component {
  render() {
    return (
      <Fragment>
        <HomePage />
      </Fragment>
    );
  }
}

export default App;
