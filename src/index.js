/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/konvertilo
 *****************************/

import {
  BrowserRouter,
  Route,
  Router,
  Switch
} from 'react-router-dom'

import About from './app/pages/about'
import App from './app/app'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <BrowserRouter keyLength={22}>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/about" exact={true} component={About} />
      {/*<Redirect from="/" to="/binary" />*/}
      <Router basename="/map/5AJA3RefFuTZ8z4Gn6BjMgZRgPZ2"> </Router>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
