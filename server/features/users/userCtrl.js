const Users = require('./User')

module.exports = {

        getAuthUser(req, res) {
            Users.findOne({
                email: req.user._json.email
            }, (err, user) => {
                if (user) {
                    Users.findById(user._id)
                        .populate('questions')
                        .populate('answers')
                        .exec((error, currentUser) => {
                            if (error) {
                                return res.status(500).json(error);
                            }
                            return res.status(200).json(currentUser);
                        });
                } else if (err) {
                    return res.status(500).json(err);
                }
            });
        },

        userExists( req, res, next ) {
		        if ( !req.user ) throw new Error( 'user null' );
		          Users.findOne( { email: req.user._json.email }, ( err, user ) => {
			             if ( err ) return res.redirect( '/#/error' );
			             if ( user ) return res.redirect( '/#/user' );
			             next();
		        });
	     },

        createAccount(req, res) {
            new Users({
                firstName: req.user._json.given_name,
                lastName: req.user._json.family_name,
                name: req.user._json.name,
                email: req.user._json.email,
                creationDate: new Date(),
                photo: req.user._json.picture
            }).save((err, user) => {
                if (err) {
                    return res.redirect('/callback');
                }
                return res.redirect('/#/');
            });
        },

        createUser( req, res ) {
		        if ( req.user.identities[ 0 ].provider === "Auth0") {
			           createAccount( req, res );
		        }
	     },


        getUsers(req, res) {
            Users.find(req.query)
                .exec((err, users) => {
                    if (err) {
                        return res.status(500).json(err);
                    }
                    return res.status(200).json(users);
                });
        },

        getOneUser(req, res) {
            Users.findById(req.params.id)
                .populate('questions')
                .populate('answers')
                .exec((err, users) => {
                    if (err) {
                        return res.status(500).json(err);
                    }
                    return res.status(200).json(users);
                });
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

    deleteUser(req, res) {
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
