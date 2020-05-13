import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Users from './Components/Users'
import Unknowncomponent from './Components/Unknown'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/user' component={Users}/>
          <Route path='/unknown' component={Unknowncomponent}/>
          <Redirect exact from='/' to='/user'/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
