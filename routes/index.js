/* GET home page. */
var userData = require("../schema/users").user;

exports.index = function(req, res){
  res.render('index', { title: 'School Management - Home' });
};

exports.login = function(req, res){
	
    var username = JSON.parse(req.body.data).username;
    var password = JSON.parse(req.body.data).password;
	if (username == '' || password == '') {
	    return res.send({error : 'error',_id :0});
	}

	userData.findOne({'username' : username}, function(err, user){
	    if (err) {
	        console.log(err);
	        return res.send({error : 'error',_id :0});
	    }else{	
	    	if (user==null){
		    	return res.send({error : 'error',_id :0});
			}else{
				if (username === user.username && password === user.password) {
					return res.send(user);
				}else{
					return res.send({error : 'error',_id :0});
				} 
			}
	    }
	});
};

exports.getuser = function(req, res){
	
    var id = JSON.parse(req.body.data)._id;
    
	if (id == '') {
	    return res.send({error : 'error',_id :0});
	}

	userData.findOne({'_id' : '1'}, function(err, user){
	    if (err) {
	        console.log(err);
	        return res.send({error : 'error',_id :0});
	    }else{	
	    	if (user==null){
		    	return res.send({error : 'error',_id :0});
			}else{
				return res.send(user);
			}
	    }
	});
};

function GenerateCookie() {
	var cookieHash = generator();
	return cookieHash
}

exports.authenticate = function(req, res, next) {
	var cookie = req.cookies.isLoggedin;
	if(cookie.data && (cookie.status === 200)) {
		return next();
	}
	res.redirect('/login');
}
