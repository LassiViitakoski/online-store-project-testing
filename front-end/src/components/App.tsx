import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import { Okta } from './Okta';

export const App = (): JSX.Element => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={Okta} />
      </Router>
    </div>
  );
};
