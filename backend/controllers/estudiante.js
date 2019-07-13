const estudiante = require('../db_apis/estudiante.js');
const profesor = require('../db_apis/profesor.js');
const mysql = require('mysql');
const dbConfig = require('../config/database.js');
const controller = {};


controller.list_estudiantes = async function get(req, res, next) {
    try {
        const context = {};

            context.id = req.query.estId;
            context.pass = req.query.estPass;
      const rows = await estudiante.find_estudiante(context);
      if (req.query.estId) {
        if (rows.length === 1) {
          /*res.render('customer',{
            data: rows
          });*/
            res.status(200).json(rows[0]);
        } else{
          const rows = await profesor.find_profesor(context);
          if (req.query.estId) {
            if (rows.length === 1) {
              res.status(200).json(rows[0]);
          }
          else {
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
          //res.status(404).end();
/*          res.format ({
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

});*/


        }
      }
    }else {
            console.log(req.body.nombre);
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}
module.exports = controller;
