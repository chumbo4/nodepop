/**
 * Created by manuel on 25.05.16.
 */
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var anuncio = mongoose.model('anuncio');

//auth
var jwtAuth = require('../../../lib/jwtAuth');
router.use(jwtAuth());

router.get('/',function (req, res, next) {
    var criteria = {};
    var tag = req.query.tag;
    var venta = req.query.venta;
    var nombre = req.query.nombre;
    var precio = req.query.precio;


    if (typeof tag !== 'undefined'){
        criteria.tag = tag;
    }

    if (typeof venta !== 'undefined'){
     criteria.venta = venta;
    }

    if (typeof(nombre) !== 'undefined'){
     criteria.nombre = new RegExp('^' + nombre, "i");
    }

    if (typeof(precio) !== 'undefined'){
        if (precio.charAt(0) == '-'){
            criteria.precio = {'$lte': precio.substr(1)};
        } else if (precio.charAt(precio.length-1) == '-'){
            criteria.precio = {'$gte': precio.substring(0,precio.length-1)};
        } else if (precio.indexOf('-') == -1){
            criteria.precio = precio;
        } else {
            var index_character = precio.indexOf('-');
            var max_precio = precio.substr(index_character+1);
            var min_precio = precio.substr(0,index_character);
            criteria.precio = {'$lte': max_precio, '$gte': min_precio};
        }
    }



    var start = parseInt(req.query.start) || 0;
    var limit = parseInt(req.query.limit)|| null;
    var sort = req.query.sort || null;

    anuncio.list(criteria, start, limit, sort, function (err, rows) {
        if (err){
            return res.json({succes: false, err: err});
        }
        return res.json({succes: true, rows: rows});
    });
   /* anuncio.find().exec(function(err, rows){
        if (err) {
            next(err);
            return;
        }
        res.json({succes: true, rows: rows});
    });*/

});
router.post('/',function (req, res, next) {
    var instancia_anuncio = new anuncio(req.body);
    console.log(instancia_anuncio);
    instancia_anuncio.save(function (err, saved) {
        if (err) {
            next(err);
            return;
        }
        res.json({succes: true, saved: saved});
    });
});

module.exports = router;