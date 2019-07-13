const pool = require('../services/database.js');
const mysql = require('mysql');


const baseQuery =
 `select ced_estudiante "id_estudiante",
        rol "rol",
        nombre "nombre"
   from Estudiante`;

async function find_estudiante(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.id_estudiante = context.id; // el bind se referencia con el id de la tabla
    binds.pass_estudiante = context.pass;
    query += `\nwhere ced_estudiante =`+"'"+binds.id_estudiante+"'";
    query += `\n AND password=`+"'"+binds.pass_estudiante+"'";

  }
  //console.log(query);
const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);
  //console.log('leng controller',result.length);
  return result;
}

module.exports.find_estudiante = find_estudiante;
