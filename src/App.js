import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import HomePage from './Pages/HomePage';
import KHDEnDeGoudenEeuw from './Pages/KHDEnDeGoudenEeuw';
import DelftseMeesters25Mei from './Pages/DelftseMeesters11Mei';
import ConcertFestival25Mei from './Pages/ConcertFestival25Mei';
import Maestro25Mei from './Pages/Maestro25Mei';
import Contact from './Pages/Contact';
import ComingSoon from './Pages/ComingSoon';

import News from './Pages/News';
import IdeeenMuziekstuk from './Pages/News/20181108IdeeenMuziekstuk';

configureAnchors({ scrollDuration: 800 });

const App = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route path="/nieuws" exact component={News} />
        <Route
          path="/nieuws/ideeen-muziekstuk-voor-delft"
          exact
          component={IdeeenMuziekstuk}
        />
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
          path="/concertfestival-25-mei"
          exact
          component={ConcertFestival25Mei}
        />
        <Route path="/maestro-25-mei" exact component={Maestro25Mei} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/site" exact component={HomePage} />
        <Route path="/" component={ComingSoon} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
