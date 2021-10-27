'use strict';
const express = require('express');
const kraken = require('kraken-js');
const path = require('path');
const cors = require('cors');
//const db = global.db;
let options, app;

options = {
  onconfig: function (config, next) {
    next(null, config);
  }
};

app = module.exports = express();
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});


global.db = require('./app/models/index');
global.log = require('./app/lib/logger');
global.appRoot = path.resolve(__dirname);

app.use(kraken(options));
app.on('start', function () {
  global.kraken = app.kraken;
  global.log.info('Application ready to serve requests.');
  global.log.info('Environment: %s', app.kraken.get('env:env'));
});

module.exports = app;