/**
 * Created by manuel on 25.05.16.
 */
/**
 * Created by manuel on 25.05.16.
 */
var express = require('express');
var router = express.Router();

var config = require('../../../local_config');
var jwt = require('jsonwebtoken');
var passwordHash = require('password-hash');
var mongoose = require('mongoose');

var usuario = mongoose.model('usuario');



router.get('/',function (req, res, next) {
    usuario.find().exec(function(err, rows){
        if (err) {
            next(err);
            return;
        }
        res.json({succes: true, rows: rows});
    });

});

router.post('/authenticate',function (req, res, next) {
    var email = req.body.email;
    var password = req.body.clave;

    usuario.findOne({email: email}).exec(function (err, user) {
        if (err) {
            return res.status(500).json({success: false, error: err});
        }
        if (!user){
            return res.status(401).json({success: false, error: 'NO_USER'});
        }
        
        if (!passwordHash.verify(password, user.clave)) {
            return res.status(401).json({success: false, error: 'BAD_PASSWORD'});
        }

         var token = jwt.sign({ id: user._id}, config.jwt.secret, {
             expiresIn: "2 days"
         });
        
         res.json({succes: true, token: token});
    });
});

router.post('/',function (req, res, next) {
    var instancia_usuario = new usuario();

    var name = req.body.nombre;
    var password = passwordHash.generate(req.body.clave);
    var email = req.body.email;
    instancia_usuario.nombre = name;
    instancia_usuario.clave = password;
    instancia_usuario.email = email;
    console.log(instancia_usuario);
    instancia_usuario.save(function (err, saved) {
        if (err) {
            next(err);
            return;
        }
        res.json({succes: true, saved: saved});
    });
});

module.exports = router;