import React from 'react';
import './App.css';
import Navbarmenu from './Navbarmenu';
import Adding from './menu/Adding';
import Content from './menu/Content';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
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