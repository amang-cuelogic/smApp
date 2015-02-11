var AppDispatcher 	= require('../dispatcher/AppDispatcher');
var EventEmitter 	= require('events').EventEmitter;
var SmConstants = require('../constants/SmConstants');
var assign = require('object-assign');
var SmApp = require('../components/SmApp.react');
var Router = require('react-router');
var SmActions = require('../actions/SmActions');
var CHANGE_EVENT = 'change';

var _result = {};

function validateLogin(userinfo){
  //console.log(userinfo); return false;
  var data = JSON.stringify(userinfo);
  
  $.post("http://localhost:3000/login", {data : data}, {async: false}).
  success(function(data) {
    _result = data;
    SmActions.updates(); 
    Router.Navigation.contextTypes.goBack('/home');
  });

}

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var credentials;
  switch(action.actionType) {

    case SmConstants.SM_LOGIN:

      username = action.credentials.username;
      password = action.credentials.password;
      if (username !== '' && password !== '') {
        validateLogin(action.credentials);
      }
      //
      break;
    case SmConstants.SM_UPDATE:
      _result = _result;
      //
      break;

    default:
      // no op
  }
  SmStore.emitChange();
  //console.log(SmStore.getResult());
});

var SmStore = assign({}, EventEmitter.prototype, {
  // Returns all shoes
  getResult: function() {
    return _result;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

module.exports = SmStore;