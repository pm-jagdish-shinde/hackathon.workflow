'use strict';

import React from 'react';
import Router from 'react-router';

import Dashboard from './dashboard.jsx!';
import Collect from './collect.jsx!';

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;


class App extends React.Component {
    render() {
        return (
            <div>
                <RouteHandler/>
            </div>
        );
    }
}

var NotFound = React.createClass({
    render: function () {
        return <h2>Not found</h2>;
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Dashboard}/>
        <Route name="dashboard" path="dashboard" handler={Dashboard}/>
        <Route name="collect" handler={Collect}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('main'));
});
