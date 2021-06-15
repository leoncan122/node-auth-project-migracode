import './App.css';

import React, {useContext, useState} from 'react';

import SignIn from './pages/SingIn'
import Home from './pages/Home'

import {Switch, Route} from 'react-router-dom'
import SignUp from './pages/SingUp';

//context
import { useUser, UserProvider, UserContext} from './context/UserContext'

function App() {
  
  const {loged, setLoged}= useContext(UserContext)

  return (
      <div className="App">
        <Switch>
          {!loged ?
            <Route exact path='/sign-in'>
              <SignIn />
            </Route> : 
            <Route >
              <Home />
            </Route>
          }
          <Route path='/sign-up'>
            <SignUp /> 
          </Route>
        </Switch>
      </div>
  );
}
 export default App;

