var authController = require('../controller/authcontroller');
var reset = "\x1b[0m"
var cyan = "\x1b[36m"
var yellow = "\x1b[33m"

module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.get('/results', authController.results);

    app.get('/member', authController.member);

    app.post('/signup', 
    passport.authenticate('local-signup', { failureRedirect: '/index' }),
    function(req, res) {
        var id = encodeURIComponent(req.user.id);
        var first = encodeURIComponent(req.user.firstname)
        res.redirect('search/?userId=' + id + '&userName=' + first);
      console.log(`${cyan} req.user keys: ${yellow}${Object.keys(req.user)}${reset}`)
      console.log(`${cyan} req.user values: ${yellow}${Object.values(req.user)}${reset}`)
    });

    app.get('/SearchResults', isLoggedIn, authController.quiz);

    app.get('/logout',authController.logout);

    app.post('/signin', 
    passport.authenticate('local-signin', { failureRedirect: '/index' }),
    function(req, res) {
    var id = encodeURIComponent(req.user.id);
    var first = encodeURIComponent(req.user.firstname)
    res.redirect('search/?userId=' + id + '&userName=' + first);
      console.log(`${cyan} req.user keys: ${yellow}${Object.keys(req.user)}${reset}`)
      console.log(`${cyan} req.user values: ${yellow}${Object.values(req.user)}${reset}`)
    });



    function isLoggedIn(req, res, next) {
        // console.log("console.log req: " + req)
        if (req.isAuthenticated())
            
            return next();
             
        res.redirect('/signin');
     
    }


}