var React = require('react');
var SmLoginApp = require('./components/SmLoginApp');
var SmHomeApp = require('./components/SmHomeApp');
var SmLogoutApp = require('./components/SmLogoutApp');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var App = React.createClass({

  render: function() {
  	return (
      <div className="container">
        <header>
          <div className="heading">
          <h2>School Management System</h2>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="app">Login</Link></li>
            <li><Link to="home">Home</Link></li>
            <li><Link to="logout">Logout</Link></li>
          </ul>
          </div>
        </header>
        
        <RouteHandler/>
      </div>
  	);
  }
});


var routes = (
  <Route name="app" path="/" handler={App}>
    <Route  name="home" handler={SmHomeApp}/>
    <Route  name="login" handler={SmLoginApp}/>
    <Route  name="logout" handler={SmLogoutApp}/>
    <DefaultRoute handler={SmLoginApp}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render( <Handler />, document.getElementById('smapp'));
});
