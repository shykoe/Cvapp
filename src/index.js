import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './store/configreStore';
import App from './App';
const store = configureStore(window.__INITIAL_STATE__)
//const customHistory = createBrowserHistory()
ReactDOM.render(
  <Provider store={store}>
	<Router>
		<Switch>
		<Route  path="/"  render={()=>(<App/>)}/>
		</Switch>
	</Router>
  </Provider>
  ,
  document.getElementById('root')
);
