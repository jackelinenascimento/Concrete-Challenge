
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Result from './pages/Result/index'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/result' component={Result}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;