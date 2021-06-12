import './App.css';

import React, {useState} from 'react';

import SignIn from './pages/SingIn'
import SignUp from './pages/SingUp'
import Home from './pages/Home'

import {Switch, Route} from 'react-router-dom'


function App() {

  const [loged, setLoged] = useState(false)
  
  return (
    <Switch>
      <div className="App">
        {!loged ?
        <Route exact path='/sign-in'>
          <SignIn loged={loged} setLoged={setLoged}/>
        </Route> : 
        <Route >
          <Home />
        </Route>
        } 
      </div>
    </Switch>
  );
}

export default App;
