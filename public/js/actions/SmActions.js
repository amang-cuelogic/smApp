var AppDispatcher = require('../dispatcher/AppDispatcher');
var SmConstants = require('../constants/SmConstants');

var SmActions = {
	login: function(credentials) {
		AppDispatcher.dispatch({
			actionType: SmConstants.SM_LOGIN,
			credentials: credentials
		});
	},
	updates: function(credentials) {
		AppDispatcher.dispatch({
			actionType: SmConstants.SM_UPDATE,
		});
	},

};
module.exports = SmActions;