import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import KHDEnDeGoudenEeuw from './Pages/KHDEnDeGoudenEeuw';
import DelftseMeesters25Mei from './Pages/DelftseMeesters11Mei';
import MuziekFestival25Mei from './Pages/MuziekFestival25Mei';
import News from './Pages/News';
import Contact from './Pages/Contact';
import ComingSoon from './Pages/ComingSoon';

configureAnchors({ scrollDuration: 800 });

const App = () => (
  <Router>
    <Switch>
      <Route path="/nieuws" exact component={News} />
      <Route
        path="/khd-en-de-gouden-eeuw"
        exact
        component={KHDEnDeGoudenEeuw}
      />
      <Route
        path="/delftse-meesters-11-mei"
        exact
        component={DelftseMeesters25Mei}
      />
      <Route
        path="/muziek-festival-25-mei"
        exact
        component={MuziekFestival25Mei}
      />
      <Route path="/contact" exact component={Contact} />
      <Route path="/site" exact component={HomePage} />
      <Route path="/" component={ComingSoon} />
    </Switch>
  </Router>
);

export default App;
