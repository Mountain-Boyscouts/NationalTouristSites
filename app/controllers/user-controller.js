const passport = require("passport");

module.exports = function(data) {
    return {
        login(req, res) {
            res.render('../views/login.pug');
        },
        register(req, res) {
            res.render('../views/register.pug');
        },
        logout() {

        },
        registerUser(req, res) {
            const { username, password } = req.body;

            return data.registerUser(username, password)
                .then((user) => {
                    res.redirect('/home');
                    console.log('yolo');
                })
                .catch((err) => {
                    req.flash("errorMessage", err.message);
                    res.redirect("/register");
                });
        },
        loginUser(req, res, next) {
            const auth = passport.authenticate("local", (err, user) => {
                if (err) {
                    next(err);
                    return;
                }

                if (!user) {
                    req.flash("errorMessage", "Invalid username or password!");
                    res.redirect("/login");
                }

                req.login(user, error => {
                    if (error) {
                        next(error);
                        return;
                    }

                    req.flash("successMessage", "You have logged in successfully!");
                    res.redirect(req.session.returnTo || "/home");
                    req.session.returnTo = null;
                });
            });

            auth(req, res, next);
        },
    };
};