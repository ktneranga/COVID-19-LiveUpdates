import React from 'react';
import Headerbar from './Components/Navbar/Headerbar'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {

    return(
      <React.Fragment>
        <BrowserRouter>
          <Headerbar/>

          <Switch>
            <Route path="/about">
              <About/>
            </Route>

            <Route path="/">
              <Home/>
            </Route>
          </Switch>
          
        </BrowserRouter>
        <br></br>
      </React.Fragment>
    )
}

export default App;
