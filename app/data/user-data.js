module.exports = function(models) {
    const { User } = models;

    return {
        registerUser(firstName, lastName, username, password) {
            const user = new User({
                firstName,
                lastName,
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
        },

        findUserByUsername(username) {
            return new Promise((resolve, reject) => {
                User.findOne()
                    .byName(username)
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        },

        searchUsers(username) {
            return new Promise((resolve, reject) => {
                User.find()
                    .byName(username)
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(user);
                    });
            });
        },

        findUserById(userId) {
            return new Promise((resolve, reject) => {
                User.findById(userId).exec((err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        }
    };
};