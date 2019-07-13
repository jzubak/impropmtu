var exports = module.exports = {}
 
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
 
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
 
exports.SearchResults = function(req, res) {
    
    res.render('searchResults');
 
}

exports.member = function(req, res) {
    
    res.render('member');
 
}

exports.results = function(req, res) {
    
    res.render('results');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
}