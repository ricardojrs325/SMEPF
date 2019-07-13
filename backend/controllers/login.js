const estudiante = require('../db_apis/estudiante.js');
const profesor = require('../db_apis/profesor.js');
const admin = require('../db_apis/admin.js');
const mysql = require('mysql');
const dbConfig = require('../config/database.js');
const controller = {};


controller.list_users = async function get(req, res, next) {
    try {
        const context = {};

            context.id = req.query.userId;
            context.pass = req.query.userPass;
      const rows = await estudiante.find_estudiante(context);
      if (req.query.userId) {
         if (rows.length === 1) {
            res.status(200).json(rows[0]);
          } else{
          
          const rows = await profesor.find_profesor(context);

            if (rows.length === 1) {
              res.status(200).json(rows[0]);
          }
          else{
            const rows = await admin.find_admin(context);
             if (rows.length === 1) {
                res.status(200).json(rows[0]);
              } else{
            res.format ({
     'text/plain': function() {
        res.send('null');
     },

     'text/html': function() {
        res.send('null');
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

      }

  }
}else {
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}
module.exports = controller;
