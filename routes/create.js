

var User = require('../data/models/User');
var Partner = require('../data/models/Partner');
var shortId = require('shortid');

module.exports = function(app){
	app.post('/personas/new', function(req, res, next){
		var user = new User({
			_id: shortId.generate(),
			email: req.body.username,
			username: req.body.username,
			name: req.body.firstname + " " + req.body.lastname,
			full_user: true,
			password: req.body.password
		});
		user.save(function(err){
			if(err){
				console.log(err);
				res.status(500);
			} else {
				req.session.user = user;
				res.redirect('/home');
			}
		}); 
	});

	app.post('/empresas/new', function(req, res, next){
		console.log(req.body);
		var empresa = new Partner({
			email: req.body.username,
			_id: shortId.generate(),
			name: req.body.name,
			place: true,
			username: req.body.username,
			password: req.body.password,
			type: req.body.type,
		
		});

		empresa.save(function(err){
			if(err){
				console.log(err);
				res.status(500);
			} else {
				req.session.user = empresa;
				res.redirect('/home');
			}
		})
	});
}