'use strict';

const fs = require('fs');
const util = require('util');

const reader = require('./lib/edit-file')

let file =`${__dirname}/data/person.json`;

reader.readerFile(file, (err, data) => {
    if (err) { throw err; }
    console.log('Callback from module', data);
  });