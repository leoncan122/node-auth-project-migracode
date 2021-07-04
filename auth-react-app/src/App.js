import React, {useContext, useState} from 'react';

//style
import './App.css';

//components
import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';
import Home from './pages/Home';

import { BrowserRouter } from 'react-router-dom';
import {Switch, Route} from 'react-router-dom'

//context
import {UserContext} from './context/UserContext'


function App() {
  
  const {loged}= useContext(UserContext)
  
  return (
    <BrowserRouter>
      <div className="App">
      
        <Switch>
          {!loged ?
            <Route path='/sign-in'>
              <SignIn />
            </Route> : 
              
            <Route>
                <Home exact path='/home'/>
            </Route>
                
          }
          <Route path='/sign-up'>
            <SignUp /> 
          </Route>
        </Switch>
      
      </div>
    </BrowserRouter> 
    
  );
}
 export default App;

