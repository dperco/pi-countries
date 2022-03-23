const { Router } = require('express');
const countriesRoute= require('./countries');
const tourismsRoute= require('./tourisms');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/',countriesRoute);
router.use('/',tourismsRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
