/**
 * Created by manuel on 25.05.16.
 */
'use strict';
var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
    nombre: String,
    email: { type: String, index: true },
    clave: String
});

mongoose.model('usuario',usuarioSchema);