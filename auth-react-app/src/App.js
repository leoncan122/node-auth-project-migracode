import React, {useContext, useState} from 'react';

//style
import './App.css';

//components
import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';
import Home from './pages/Home';
import Messages from './components/Messages';



import {Switch, Route, Redirect} from 'react-router-dom'

//context
import {UserContext} from './context/UserContext'


function App() {
  
  const {loged}= useContext(UserContext)

  function PrivateRoute ({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        return loged === true
          ? children
          : <Redirect to='/sign-in' />
      }} />
    )
  }
  
  return (
    
      <div className="App">
            {    loged && 
             <Redirect to='/home' />
            }
          <Route path='/sign-in' component={SignIn}/>
          <PrivateRoute path='/home' >
            <Home />
          </PrivateRoute>
          <Route path='/sign-up' component={SignUp}/>
        
      </div>
    
  );
}
 export default App;

