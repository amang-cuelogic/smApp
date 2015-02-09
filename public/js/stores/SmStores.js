var AppDispatcher 	= require('../dispatcher/AppDispatcher');
var EventEmitter 	= require('events').EventEmitter;
var SmConstants = require('../constants/SmConstants');
var assign = require('object-assign');
var SmApp = require('../components/SmApp.react');
var SUBMIT_EVENT = 'submit';

var _result = {};

function validateLogin(userinfo){
  //console.log(userinfo); return false;
  var data = JSON.stringify(userinfo);
  
  $.post("http://localhost:3000/login", {data : data}, {async: false}).
  success(function(data, status) {
    _result = data;
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
      SmStore.emitChange();
      break;

    default:
      // no op
  }
});

var SmStore = assign({}, EventEmitter.prototype, {
  // Returns all shoes
  getResult: function() {console.log(_result)
    return _result;
  },

  emitChange: function() {
    this.emit(SUBMIT_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(SUBMIT_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(SUBMIT_EVENT, callback);
  }

});

module.exports = SmStore;