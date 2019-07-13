const profesor = require('../db_apis/profesor.js');
const mysql = require('mysql');
const dbConfig = require('../config/database.js');
const controller= {};

controller.list_profesores =async function get(req, res, next) {
    try {
      const context = {};


      context.id = req.query.profId;
      context.pass = req.query.profPass;

      const rows = await profesor.find_profesor(context);
      if (req.query.profId) {
        if (rows.length === 1) {
          /*res.render('customer',{
            data: rows
          });*/
            res.status(200).json(rows[0]);
        } else {
          res.format ({
   'text/plain': function() {
      res.send('hey');
   },

   'text/html': function() {
      res.send('hey');
   },

   'application/json': function() {
      res.send({ rol: '' });
   },

   'default': function() {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
   }
});

        }
      } else {
          console.log(req.body.nombre);

        res.status(200).json(rows);
      }
    } catch (err) {
      next(err);
    }
  }


    controller.reg_prof = async function post(req, res, next) {

      try {
        let prof = getProfFromRec(req);

        prof = await profesor.crear_prof(prof);

          console.log(prof);
        res.status(201).json(prof);

      } catch (err) {
        next(err);
      }
    }


    controller.list_profesores_grupo =async function get(req, res, next) {
        try {
          const context = {};
          const rows = await profesor.find_profesor_grupo(context);

              console.log(req.body.nombre);

            res.status(200).json(rows);
        } catch (err) {
          next(err);
        }
      }






  //se reciben los datos del profesor ,esto desdes el front
function getProfFromRec(req) {
  const prueb = Object.values(req.body);

  /*var result = Object.keys(req.body).map(function(key) {
  return [Number(key), req.body[key]];
});*/
  console.log("esto desde el getfromrec",req.body);
  const profesor = {
   //PREFERIBLEMNTE TENER EL MISMO ORDEN DE LAS COLUMNAS EN LA BD
    ced_prof: req.body.ced_profesor, //todo en minuscula sino agrega nada es porque debe estar en minuscula
    password: req.body.password,
      nombre: req.body.nombre,
          apellido: req.body.apellido,
    sexo: req.body.sexo,
    direccion: req.body.direccion,
    correo: req.body.correo,
      celular: req.body.celular,
  };
  return req.body;
}

  module.exports=controller;
  //module.exports.delete = del;
  //module.exports.put = put;
  //module.exports.post = post;
  //module.exports.get = get;
