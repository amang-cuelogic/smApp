var AppDispatcher = require('../dispatcher/AppDispatcher');
var SmConstants = require('../constants/SmConstants');

var SmActions = {
	login: function(credentials) {
		var data = JSON.stringify(credentials);

		$.post("http://localhost:3000/login", {data : data}).
			success(function(data) {
				if(data){
					AppDispatcher.dispatch({
						actionType: SmConstants.SM_LOGIN,
						data: data
					});
				}
		});
		
	},
	getCurrentUserDetails: function(userid) {
		var data = userid;

		$.post("http://localhost:3000/getuser", {data : data}).
			success(function(data) {console.log(data)
				if(data){
					AppDispatcher.dispatch({
						actionType: SmConstants.SM_GETDETAIL,
						data: data
					});
				}
		});
	},

};
module.exports = SmActions;