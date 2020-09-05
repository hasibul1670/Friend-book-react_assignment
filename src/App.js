import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './Component/Home/Home';
import { Container } from '@material-ui/core';
import PostInfo from './Component/Postinfo/PostInfo';
import Header from './Component/Header/Header';

function App() {
  return (
    
      <div>
        <Header></Header>
<Container maxwidth="sm">
<Router>
  <Switch>
    <Route path="/home">
      <Home></Home>

    </Route>

    <Route path="/Comment/:id">
      
      <PostInfo></PostInfo>
      
      </Route>



    <Route exact path="/">
          <Home/>

        </Route>

  </Switch>
</Router>
</Container>
</div>
   
  );
}

export default App;
