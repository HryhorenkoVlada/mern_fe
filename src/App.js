import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Users from './user/pages/Users';
import { NewPlace, UserPlaces } from './places/pages';
import { Navigation } from './shared/navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/:userId/places" exact component={UserPlaces} />
          <Route path="/places/new" exact component={NewPlace} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
