var React = require('react');
var SmActions = require('../actions/SmActions');
var SmStores = require('../stores/SmStores');
var SmCookie = require('../mixins/cookie');
var Navigation = require('react-router').Navigation;

var SmHomeApp = React.createClass({
  mixins : [Navigation, SmCookie],

  componentDidMount: function() {
  	this.checkCookie();
    SmStores.addChangeListener(this._onChange);
  },
  render: function() {
  	return (
      <div>
        <h1>Welcome to Home</h1>
      </div>
  	);
  },
  _onChange: function() {
    
  }
});

module.exports = SmHomeApp;
