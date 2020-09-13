import React from 'react';
import './style/App.css'

import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom'
import Inicio from './components/Inicio'
import Navbar from './components/NavBar';
import HarryPotter from './components/HarryPotter'
import SobreMi from './components/SobreMi';
import JapanQueen from './components/JapanQueen.jsx'




function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Navbar/>
          <Inicio/>
        </Route>
        <Route path="/SobreMi" exact>
          
        <Navbar/>
       
        <SobreMi/>
      
         
       
        </Route>
        <Route path="/JapanQueen" exact>
        <Navbar/>
         <JapanQueen/> 
        </Route>
        <Route path="/HarryPotter" exact>
        <Navbar/>
        <HarryPotter/>
        </Route>
        
        
      </Switch>
    </div>
   
    </Router>
  );
}

export default App;
