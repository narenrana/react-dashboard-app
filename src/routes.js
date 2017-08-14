import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './App';
 
import Dashboard from './scenes/dashboard/dashboard.js';
 

export default (
    <Route path="/" component={App} name={" "}>
        <IndexRoute path="/" component={Dashboard} name={"Dashboard Page"} />
        <Route path="dashboard" component={Dashboard} />
    </Route>
);
