module.exports = {
	checkCookie : function(){
		var userinfo = $.cookie("userinfo");
		if(!userinfo) {
			this.transitionTo('app');
		}else{
			this.transitionTo('home');
		}
	}

}