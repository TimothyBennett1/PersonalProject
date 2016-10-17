const express = require('express');
const {json} = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const sessionConfig = require('./config/config');
const passport = require('passport');
const app = express();
const strategy = require('./setup-passport');
const port = 4000;
const mongoUri = 'mongodb://localhost:27017/devFlow';

app.use(json());
app.use(express.static(`${ __dirname }/public`))
app.use(session(sessionConfig.session))
app.use(passport.initialize())
app.use(passport.session())
passport.use(strategy)
passport.serializeUser( ( user, done ) => done( null, user ) );
passport.deserializeUser( ( user, done ) => done( null, user ) );

mongoose.connect( mongoUri );
mongoose.connection.once( 'open', () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );

require('./masterRoutes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
