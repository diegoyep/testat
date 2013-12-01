

function ensureAuthentication(req, res, next){
	if(!req.session.user) {
		res.send('401 no autorizado');
	} else {
		next();
	}
}

module.exports = ensureAuthentication;