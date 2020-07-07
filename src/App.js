import React, { Fragment } from 'react';
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import routes from './config/routes';
import AuthProvider from './providers/authProvider';
function App() {
  return (
    <AuthProvider>
      <Fragment>
        <Router>
          <Switch>
            {routes.map((route,index)=>(
              <RouteWithSubRoutes key={index} {...route}/>
            ))}
          </Switch>
        </Router>
    </Fragment>
   </AuthProvider>
  );
}
function RouteWithSubRoutes(route){
  return (
    <Route
    path={route.path}
    exact={route.exact}
    render={props=><route.component routes={route.routes} {...props}/>}
    />
  )
}

export default App;
