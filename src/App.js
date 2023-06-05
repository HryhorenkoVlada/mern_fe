import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { SignIn, Users } from './user/pages';
import { NewPlace, UpdatePlace, UserPlaces } from './places/pages';
import { Navigation } from './shared/navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <main className="wrapper">
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/:userId/places" exact component={UserPlaces} />
          <Route path="/places/new" exact component={NewPlace} />
          <Route path="/places/:placeId" exact component={UpdatePlace} />
          <Route path="/sign_in" exact component={SignIn} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
