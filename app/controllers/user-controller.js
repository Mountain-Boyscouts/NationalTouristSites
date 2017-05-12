module.exports = function() {
    return {
        login(req, res) {
            res.render('../views/login.pug');
        },
        register(req, res) {
            res.render('../views/register.pug');
        },
        logout() {

        }
    };
};