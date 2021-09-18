const { Router } = require("express");
const { Country } = require("../db.js");
const axios = require("axios");
const router = Router();
router.get("/", async (req, res) => {
    try {
        const paises= (await axios.get("https://restcountries.eu/rest/v2/all")).data;
        let resultFN=[]
        for (let index = 0; index < paises.length; index++) {
            const {alpha3Code, name, flag, region, capital, subregion, area, population}=paises[index];
            const pais = await Country.create({id: alpha3Code, nombre: name, img: flag,
                continente: region, capital, subregion, area: parseFloat(area), poblacion: parseFloat(population)}
            );
            resultFN=[...resultFN, pais];            
        }
        res.json(resultFN);        
    } catch (error) {
        
        res.send("Error API: "+error)
    }

})
        
        






module.exports = router;