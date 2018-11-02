import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import KHDEnDeGoudenEeuw from './Pages/KHDEnDeGoudenEeuw';
import DelftseMeesters25Mei from './Pages/DelftseMeesters11Mei';
import MuziekFestival25Mei from './Pages/MuziekFestival25Mei';
import News from './Pages/News';

configureAnchors({ scrollDuration: 800 });

const App = () => (
  <Router>
    <Switch>
      <Route path="/nieuws" exact component={News} />
      <Route path="/khd-en-de-gouden-eeuw" component={KHDEnDeGoudenEeuw} />
      <Route path="/delftse-meesters-11-mei" component={DelftseMeesters25Mei} />
      <Route path="/muziek-festival-25-mei" component={MuziekFestival25Mei} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default App;
