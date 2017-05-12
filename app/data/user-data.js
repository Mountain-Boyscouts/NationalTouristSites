module.exports = function(models) {
    const { User } = models;

    return {
        registerUser(username, password) {
            const user = new User({
                username,
                password
            });

            return new Promise((resolve, reject) => {
                user.save((err) => {
                    if (err) {
                        let error;

                        if (err.code === 11000 && err.message.indexOf("username") > 0) {
                            error = new Error("This username is already in use!");
                        } else {
                            error = err;
                        }

                        return reject(error);
                    }

                    return resolve(user);
                });
            });
        }
    }
};