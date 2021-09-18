const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const cargaDataRouter = require("./cargaDataRouter.js");
const countriesRouter = require("./countriesRouter.js");
const actividadesRouter = require("./actividadesRouter.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/cargaData", cargaDataRouter);
router.use("/countries", countriesRouter);
router.use("/actividades", actividadesRouter);

module.exports = router;
