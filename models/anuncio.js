/**
 * Created by manuel on 25.05.16.
 */
'use strict';
var mongoose = require('mongoose');

var anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

//method static
anuncioSchema.statics.list = function(filter, start, limit, sort, cb) {
    var query = anuncio.find(filter);
    query.skip(start);
    query.limit(limit);
    query.sort(sort);
    return query.exec(cb);
};

var anuncio = mongoose.model('anuncio',anuncioSchema);