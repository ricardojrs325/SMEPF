const pool = require('../services/database.js');
const mysql = require('mysql');
const InsertQuery = require('mysql-insert-multiple');

const baseQuery =
 `select ced_profesor "id_profesor",
        rol "rol",
        nombre "nombre"
         from Profesor`;

async function find_profesor(context) {
  let query = baseQuery;
  const binds = {};
  if (context.id) {
    binds.id_profesor = context.id; // el bind se referencia con el id de la tabla
    binds.pass_profesor = context.pass;
    console.log(binds.pass_profesor);
    query += `\nwhere ced_profesor =`+"'"+binds.id_profesor+"'";
    query += `\n AND password=`+"'"+binds.pass_profesor+"'";
  }
  console.log(query);

const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);
  console.log(result);
  return result;
}


const profgrupQuery =
 `select ced_profesor "id_profesor",
        nombre "nombre",
        apellido "apellido"
         from Profesor`;

async function find_profesor_grupo(context) {
  let query = profgrupQuery;
  const binds = {};

/*  if (context.id) {
    binds.id_profesor = context.id; // el bind se referencia con el id de la tabla
    binds.pass_profesor = context.pass;
    query += `\nwhere ced_profesor =`+"'"+binds.id_profesor+"'";
    query += `\n AND password=`+"'"+binds.pass_profesor+"'";
  }
  */
const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);

  return result;

}



      /* const create_catedra_Sql =
       `INSERT INTO CATEDRA (SEDE_CRU,AREA_CONOCIMIENTO,CANTIDAD,ID_HORNADA,DESCRIPCION,COD_FACULTAD,COD_DEPTO,REQUISITOS) VALUES (:SEDE_CRU,:AREA_CONOCIMIENTO,:CANTIDAD,:ID_HORNADA,:DESCRIPCION,:COD_FACULTAD,:COD_DEPTO,:REQUISITOS) returning id_catedra into :id_catedra`;
*/


async function crear_prof(emp) {
 const profesor = Object.assign({}, emp);
 const binds = {};
const jsondata = emp;
const values = [];

for(var i=0; i< jsondata.length; i++)
  values.push([jsondata[i].ced_profesor,jsondata[i].password,jsondata[i].nombre,jsondata[i].apellido,jsondata[i].sexo,jsondata[i].direccion,jsondata[i].correo,jsondata[i].celular]);

  console.log("values",values);
 //const create_prof_Sql =
//  `INSERT INTO Profesor (CED_PROFESOR,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CORREO,CELULAR) VALUES (`+"'"+profesor.ced_prof+"','"+profesor.password+"','"+profesor.nombre+"','"+profesor.apellido+"','"+profesor.sexo+"','"+profesor.direccion+"','"+profesor.correo+"',"+profesor.celular+")";

  const create_prof_Sql =
   `INSERT INTO Profesor (CED_PROFESOR,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CORREO,CELULAR) VALUES ?`;

 const result = await pool.simpleExecute(create_prof_Sql,values);


 return result;
}

module.exports.find_profesor = find_profesor;
module.exports.find_profesor_grupo = find_profesor_grupo;
module.exports.crear_prof = crear_prof;
