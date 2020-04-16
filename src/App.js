import React, { useEffect, useState } from 'react';
import HomePage from './homepage';
import Stays from './stays';
import Experiences from './experiences';
import Adventures from './adventures';
import NavigationBar from './NavigationBar';
import NavigationBar2 from './NavigationBar2';
import Footer from './Footer';
import { Switch, Route, useLocation } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/stays" exact component={Stays}/>
    <Route path="/experiences" exact component={Experiences}/>
    <Route path="/adventures" exact component={Adventures}/>
  </Switch>
)

function App() {

  const [pathname, setPathname] = useState("/");
  let location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location])

  return (
    <>
    {pathname === "/" ? <NavigationBar/> : <NavigationBar2/>}
    <Routes/>
    <Footer/>
    </>
  );
}

export default App;