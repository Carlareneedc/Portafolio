import React from 'react';
import logo from './logo.svg';
import './style/App.css'
import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom'
import Inicio from './components/Inicio'
import Grids from './components/Grids'
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import SobreMi from './components/SobreMi';




function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Navbar/>
          <Inicio/>
        {/*<Grids/>*/}
        </Route>
        {/*<Route path="/Proyectos" >
          </Route>*/}
        <Route path="/SobreMi" exact>
        <Navbar/>
          <SobreMi/>
        </Route>
        
      </Switch>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;