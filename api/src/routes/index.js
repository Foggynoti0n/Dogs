const { Router } = require('express');
const dogsRouter = require('./getDogRoutes');
const temperamentsRouter = require('./getTemperamentsRoute');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
 router.use('/dogs', dogsRouter);
 router.use('/temperaments', temperamentsRouter)


module.exports = router;
