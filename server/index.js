const express = require('express');
const bodyParser = require('body-parser').json;
const mongoose = require('mongoose');
const session = require('express-session');
const sessionConfig = require('./config/config');
const app = express();
const port = sessionConfig.port;
const mongoUri = 'mongodb://localhost:27017/devFlow';

app.use(bodyParser.json());
app.use(express.static(`./public`))
app.use(express.static(`${__dirname}/../node_modules`))
app.use(session(sessionConfig.session))
mongoose.connect( mongoUri );
mongoose.connection.once( 'open', () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );


require('./masterRoutes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
