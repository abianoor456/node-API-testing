'use strict';

const app = require('./index');
const http = require('http');


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoString = require('./config/mongo.json').url;

mongoose.set('debug', true);

function connect() {
  mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });
}
connect();



var server = http.Server(app);
server.listen(process.env.PORT || 8000);

server.on('listening', function () {
  global.log.info('Server listening on http://localhost:%d', this.address().port);
});

module.exports = server;



