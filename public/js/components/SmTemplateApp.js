var React = require('react');

var SmTemplateApp = React.createClass({
  
  render: function() {
  	return (
      <div>
        {this.props.children}
      </div>
  	);
  },
});

module.exports = SmTemplateApp;
