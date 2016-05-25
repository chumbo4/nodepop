/**
 * Created by manuel on 25.05.16.
 */
'use strict';
var mongoose = require('mongoose');

var pushtokenSchema = mongoose.Schema({
    plataforma: {type: String, enum: ['ios', 'android']},
    token: String,
    usuario: String
});

mongoose.model('pushtoken',pushtokenSchema);