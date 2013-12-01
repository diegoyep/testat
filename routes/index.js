
/*
 * GET home page.
 */

 var ensureAuth = require('./middleware/ensure_auth');


module.exports = function(app){
	app.get('/', function(req, res, next){
		res.render('index', {
			title: 'Zefira AT | Inicio'
		});
	})

	app.get('/empresas', function(req, res, next){
		res.render('empresas', {
			title: 'Zefira AT | Empresas'
		})
	})

	app.get('/personas', function(req, res, next){
		res.render('personas', {
			title: 'Zefira AT | Personas'
		})
	})

	app.get('/admin', function(req, res, next){
		res.render('admin', {
			title: 'Zefira AT | Admin'
		})
	})

	app.get('/home', ensureAuth, function(req, res,next){
		res.render('home', {
			title: "Zefira AT | Home",
			user: req.session.user
		})

	})
}