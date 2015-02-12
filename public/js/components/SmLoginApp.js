var React = require('react');
var SmActions = require('../actions/SmActions');
var SmStores = require('../stores/SmStores');
var Navigation = require('react-router').Navigation;
var SmCookie = require('../mixins/cookie');

function getSmState() {
  //console.log(SmStores.getResult());
  return {
    users: SmStores.getResult()
  };
}

var SmLoginApp = React.createClass({

  mixins : [Navigation,SmCookie],

  getInitialState: function() {
    return {
      username: this.refs.username || '',
      password: this.refs.password || '',
      error: this.refs.error || 'Please Login'
    };
  },
  _onChangeUsername: function(e) {
    this.setState({
      username: this.refs.username.getDOMNode().value
    });
  },
  _onChangePassword: function(e) {
    this.setState({     
      password: this.refs.password.getDOMNode().value
    });
  },

  componentDidMount: function() {
    this.checkCookie();
    SmStores.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SmStores.removeChangeListener(this._onChange);
  },
  
  render: function() {
  	return (
      <div>
        <form className="form-signin" encType="multipart/form-data">
          <p className="alert alert-danger">{this.state.error}</p>
          <div className="form-group">
          <input type="text" ref="username" id="inputEmail" className="form-control" placeholder="Your Username" onChange={this._onChangeUsername} className="form-control" />
          <input type="password" ref="password" id="inputPassword" className="form-control" placeholder="Your password" onChange={this._onChangePassword} className="form-control" />
          </div>
          <input type="button"  onClick={this.handleSubmit} value="Login" className="btn btn-lg btn-primary btn-block"/>
      </form>
      </div>
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  handleSubmit: function() {
    SmActions.login(this.state);
  },

  _onChange: function() {
    var userDetails = getSmState();
    if(userDetails.users._id==0){
      this.setState({error : 'Enter the correct username and password'})
    }else{
      $.cookie("userinfo", userDetails.users._id); 
      this.transitionTo('home');
    }
  }

});

module.exports = SmLoginApp;
