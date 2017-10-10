import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ThoughtsDisplay from './ThoughtsDisplay';

const App = (props) => (
  <Router startingThoughtId={props.startingThoughtId}>
    <div>
      <Route
        path='/'
        startingThoughtId={props.startingThoughtId}
        render={(routeProps) => <ThoughtsDisplay {...props} {...routeProps} />}
      />
    </div>
  </Router>
)

export default App;
