import React from 'react';
import HomePage from './homepage';
import Stays from './stays';
import Experiences from './experiences';
import Adventures from './adventures';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/stays" exact component={Stays}/>
      <Route path="/experiences" exact component={Experiences}/>
      <Route path="/adventures" exact component={Adventures}/>
    </Switch>
  </Router>
)

function App() {
  return (
    <>
    <NavigationBar/>
    <Routes/>
    <Footer/>
    </>
  );
}

export default App;