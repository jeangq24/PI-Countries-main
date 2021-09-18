const { Router, response } = require("express");
const { Activity, Country } = require("../db.js");

const router = Router();

router.post("/", async (req, res)=>{
    try {
        const {nombre, dificultad, duracion, temporada, pais, medida} = req.body;
        const actividad= await Activity.create({
            nombre, dificultad, duracion, temporada, medida
        });

        for (let index = 0; index < pais.length; index++) {
            await actividad.addCountry(pais[index]);
            
        }
        res.send(actividad);       
    } catch (error) {
        res.send(error);
    }

});

router.get("/", async (req, res) => {
    try {
        const actividades = await Activity.findAll({
            include: [{
                model: Country,
                attributes: {
                    exclude: ['createdAt', 'updateAt']
                },
                through:{
                    attributes: []
                }
            }]
        })
        res.json(actividades);
    } catch (error) {
        res.send(error);
    }
})
module.exports = router;