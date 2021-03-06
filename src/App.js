import React,{useEffect} from 'react';
import './App.css';
import Navbarmenu from './Navbarmenu';
import Adding from './menu/Adding';
import Content from './menu/Content';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
useEffect(()=>{
  if(navigator.userAgent.includes('Chrome')){
    return;
  }
  window.open('https://Sanjaysathu.github.io/FoodWebsite','_system');
},[]);
  console.log('working2');
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path="/">
          <div>
            <Navbarmenu />
            <Content />
          </div>
        </Route>  
        <Route path="/order">
              <div>
                <Navbarmenu />
                <Adding />
              </div>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
