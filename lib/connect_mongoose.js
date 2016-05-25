/**
 * Created by manuel on 25.05.16.
 */
'use strict'
var mongoose = require('mongoose');
var conn= mongoose.connection;

conn.on('error',console.log.bind(console, 'connection error!'));

conn.once('open',function(){
    console.log('Connected with database');

});

mongoose.connect('mongodb://localhost:27017/nodepoddb');