const express = require('express');
const router = new express.Router();
const profesor = require('../controllers/profesor.js');
const estudiante = require('../controllers/estudiante.js');
const user = require('../controllers/login.js');
/*router.route('/participante/:id?')
  .get(participantes.get)
  .post(participantes.post)
  .put(participantes.put)
  .delete(participantes.delete);
  router.get('/list/:id?',participantes.list);
  router.post('/add',participantes.save);
    router.get('/delete/:id',participantes.delete);*/


    /*catedras
      router.get('/catedra_list/:id?',catedras.list_catedra);
      router.get('/cat_fac/:id_s?',catedras.list_facultades);
      router.get('/cat_dep/:id?',catedras.list_departamentos);
        router.get('/cat_area/:id_f?/:id_d?',catedras.list_areas);
      router.post('/catedra_add',catedras.add_fecha);
            router.post('/crear_cat',catedras.add_cat);
      router.get('/cat_sede_cru',catedras.list_unidades);


     router.get('/cat_sedes',catedras.list_sedes);
     */



     //SMEP
     router.get('/profesor_list/',profesor.list_profesores);
     router.get('/estudiante_list/',estudiante.list_estudiantes);
     router.get('/user_list/',user.list_users);
     router.post('/reg_prof',profesor.reg_prof);
     router.get('/prof_grup_list/',profesor.list_profesores_grupo);

module.exports = router;
