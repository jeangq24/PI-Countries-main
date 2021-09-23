const { Router } = require("express");
const { Country } = require("../db.js");
const axios = require("axios");
const router = Router();
router.get("/", async (req, res) => {
    try {
        const paises= (await axios.get("https://restcountries.com/v2/all")).data;
        //const paises= (await axios.get("https://restcountries.com/v2/all")).data;
        let resultFN=[]
        
        for (let index = 0; index < paises.length; index++) {
            const {alpha3Code, name, flags, continent, region, capital,  area, population}=paises[index];
            const pais = await Country.create({id: alpha3Code, nombre: name, img: flags[1],
                continente: continent,  capital, subregion:region, area: parseFloat(area), poblacion: parseFloat(population)}
            );
            resultFN=[...resultFN, pais];            
        }
        // for (let index = 0; index < paises.length; index++) {
        //     const {alpha3Code, name, flags, continent, region, capital,  area, population}=paises[index];
        //     const pais = await Country.create({id: alpha3Code, nombre: name, img: flag,
        //         continente: continent,  capital, subregion:region, area: parseFloat(area), poblacion: parseFloat(population)}
        //     );
        //     resultFN=[...resultFN, pais];            
        // }
        res.json(resultFN);        
    } catch (error) {
        
        res.send("Error API: "+error)
    }

})
        
        






module.exports = router;