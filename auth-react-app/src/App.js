import './App.css';

import React, {useState} from 'react';

import SignIn from './pages/SingIn'
import Home from './pages/Home'

import {Switch, Route} from 'react-router-dom'
import SignUp from './pages/SingUp';


function App() {

  const [loged, setLoged] = useState(false)
  
  return (
    
      <div className="App">
        <Switch>
          {!loged ?
            <Route exact path='/sign-in'>
              <SignIn loged={loged} setLoged={setLoged}/>
            </Route> : 
            <Route >
              <Home />
            </Route>
          } 
        </Switch>
      </div>
    
  );
}

export default App;
