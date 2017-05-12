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
                    console.log(err.message);
                });
        }
    };
};