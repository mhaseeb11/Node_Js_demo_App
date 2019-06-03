import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/common/Header';
import MemberPage from './containers/Member';

const App = ({ location }) => (
  <div>
    <Router>
      <Header/><br/>
      <Route location={location} exact path="/" component={MemberPage} />
    </Router>
  </div>
)

export default App;
