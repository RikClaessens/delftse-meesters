import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import HomePage from './Pages/HomePage';
import KHDEnDeGoudenEeuw from './Pages/KHDEnDeGoudenEeuw';
import LuxFutura11Mei from './Pages/LuxFutura11Mei';
import ConcertFestival25Mei from './Pages/ConcertFestival25Mei';
import Maestro25Mei from './Pages/Maestro25Mei';
import Tickets from './Pages/Tickets';
import Contact from './Pages/Contact';

import News from './Pages/News';
import IdeeenMuziekstuk from './Pages/News/20181108IdeeenMuziekstuk';
import AftrapDelftEnDeGoudenEeuw from './Pages/News/20190113AftrapDelftEnDeGoudenEeuw';
import WordJijDeDelftseMeester from './Pages/News/20190124WordJijDeDelftseMeester';

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
          path="/nieuws/aftrap-delft-en-de-gouden-eeuw"
          exact
          component={AftrapDelftEnDeGoudenEeuw}
        />
        <Route
          path="/nieuws/word-jij-de-delftse-meester"
          exact
          component={WordJijDeDelftseMeester}
        />
        <Route
          path="/khd-en-de-gouden-eeuw"
          exact
          component={KHDEnDeGoudenEeuw}
        />
        <Route path="/wereldpremière-11-mei" exact component={LuxFutura11Mei} />
        <Route
          path="/concertfestival-25-mei"
          exact
          component={ConcertFestival25Mei}
        />
        <Route path="/maestro-25-mei" exact component={Maestro25Mei} />
        <Route
          path="/kaartverkoop-delftse-meesters"
          exact
          component={Tickets}
        />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" component={HomePage} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
