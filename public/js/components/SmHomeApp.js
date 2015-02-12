var React = require('react');
var SmActions = require('../actions/SmActions');
var SmStores = require('../stores/SmStores');
var SmCookie = require('../mixins/cookie');
var Navigation = require('react-router').Navigation;

var SmHomeApp = React.createClass({
  mixins : [Navigation, SmCookie],

  getInitialState: function() {
    return {
      username: SmStores.getResult().username,
      name: SmStores.getResult().name,
      
    };
  },
  componentDidMount: function() {
  	this.checkCookie();
    this._onMount($.cookie('userinfo'));
    SmStores.addChangeListener(this._onChange);
  },
  render: function() {
  	return (
      <div className="container">
        <h2>This is Home page of School Management Application</h2>
        <p>{this.state.name}</p>
        <p>{this.state.username}</p>
      </div>
  	);
  },
  _onChange: function() {

    this.setState({username : SmStores.getResult().username,name : SmStores.getResult().name})
  },
  _onMount: function(e) {
    SmActions.getCurrentUserDetails(e);
  }
});

module.exports = SmHomeApp;
