import React, { Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Student from './Student';
import AboutUs from './Aboutus';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/"><Home/></Route>
          <Route path="/Student"><Student/></Route>
          <Route path="/AboutUs"><AboutUs/></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
