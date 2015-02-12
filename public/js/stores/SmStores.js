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
}

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case SmConstants.SM_LOGIN:
      _result = action.data;
      break;
    case SmConstants.SM_GETDETAIL:
      _result = action.data;
      break;

    default:
      return true;
  }
  SmStore.emitChange();
});

var SmStore = assign({}, EventEmitter.prototype, {
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