const User = require('./User')

module.exports = {
    // Create An Account
    createAccount(req, res) => {
        new Users({
            firstName: req.user._json.given_name,
            lastName: req.user._json.family_name,
            email: req.user._json.email,
            creationDate: new Date(),
            photo: req.user._json.picture
        }).save((errs, newUser) => {
            if (errs) {
                return res.redirect('/#/error');
            }
            return res.redirect('/#/user');
        });
    },


            getUsers(req, res) {
                Users.find((req.query))
                    .exec((err, users) => {
                        if (err) {
                            return res.status(500).json(err);
                        }
                        return res.status(200).json(users);
                    });
            },

            getThisUser(req, res) => {
                Users.findById(req.params.id)
                    .populate('questions')
                    .populate('answers')
                    .exec((err, users) => {
                        if (err) {
                            return res.status(500).json(err);
                        }
                        return res.status(200).json(users);
                    });
            }
    },

    editUser(req, res) {
        if (!req.params.id) {
            return res.status(400).send('Not in User');
        }
        Users.findByIdAndUpdate(req.params.id, req.body)
            .exec((err, user) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(user);
            });
    },

    deleteUser(req, res) => {
        if (!req.params.id) {
            return res.status(400).send('Find User To Delete')
        }
        Users.findByIdAndRemove(req.params.id, req.body)
            .exec((err, user) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(user);
            });
    }

};
