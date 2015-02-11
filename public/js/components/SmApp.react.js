var React = require('react');
var SmLoginApp = require('./SmLoginApp');
var Template = require('./SmTemplateApp');
var SmHomeApp = require('./SmHomeApp');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var SmApp = React.createClass({
  
  render: function() {
  	return (
      <div>
        <Template>
          <Locations>
            <Location path="/" handler={SmLoginApp} />
            <Location path="/login" handler={SmLoginApp} />
            <Location path="/home" handler={SmHomeApp} />
          </Locations>
        </Template>
      </div>
  	);
  },
});

module.exports = SmApp;
