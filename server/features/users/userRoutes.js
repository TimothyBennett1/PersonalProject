const userCtrl = require('./userCtrl');
const passport = require('passport');

module.exports = app => {
    // app.get(
    //   '/callback',
    //   passport.authenticate( 'auth0', { failureRedirect: '/' } ),
    //   userCtrl.userExists,
    //   userCtrl.createAccount
    // );

    app.get('api/user', userCtrl.getAuthUser);
    //Get Requests
    app.get('/api/users', userCtrl.getUsers);
    app.get('/api/users/:id', userCtrl.getOneUser);
    //Put Requests
    app.put('/api/users/:id', userCtrl.editUser);
    //Delete Routes
    app.delete('/api/users/:id', userCtrl.deleteUser)
};
