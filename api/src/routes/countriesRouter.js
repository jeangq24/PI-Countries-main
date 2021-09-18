const { Router } = require("express");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");


const router = Router();

router.get("/", async (req, res) => {
    if (req.query.name) {
        const { name } = req.query;
        try {
            const paises = await Country.findAll({
                include: [{
                    model: Activity,
                    attributes: {
                        exclude: ['createdAt', 'updateAt']
                    },
                    through:{
                        attributes: []
                    }
                }],
                attributes: ["id", "nombre", "continente", "img", "poblacion"],
                where: {
                    nombre: { [Op.iLike]: name + "%" },
                }
            })
            res.send(paises);
        } catch (error) {
            res.send(error);
        }
    } else {
        try {
            const paises = await Country.findAll({
                include: [{
                    model: Activity,
                    attributes: {
                        exclude: ['createdAt', 'updateAt']
                    },
                    through:{
                        attributes: []
                    }
                }],
                attributes: ["id", "nombre", "continente", "img", "poblacion"]
            });
            res.send(paises);
        } catch (error) {
            res.send(error);
        }
    }
})

router.get("/:idPais", async (req, res) => {
    const {idPais}=req.params;
    try {
        const pais = await Country.findAll({
            include: [{
                model: Activity,
                attributes: {
                    exclude: ['createdAt', 'updateAt']
                },
                through:{
                    attributes: []
                }
            }],
            where: {id: idPais.toUpperCase()}
        });
        res.send(pais)      
    } catch (error) {
        res.send(error);
    }
    


})



module.exports = router;