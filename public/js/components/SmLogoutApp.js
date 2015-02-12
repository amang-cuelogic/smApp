var React = require('react');
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var SmCookie = require('../mixins/cookie');


// we can create a router instance before "running" it
var SmLogoutApp = React.createClass({
  mixins : [Navigation, SmCookie],

  componentDidMount: function() {
  	$.removeCookie("userinfo");
  	this.checkCookie();
  	this.transitionTo('app');
    
  },
  render: function() {
  	return (
      <div>
        <h1>Logout</h1>
      </div>
  	);
  },
  _onChange: function() {
    
  }
});

module.exports = SmLogoutApp;