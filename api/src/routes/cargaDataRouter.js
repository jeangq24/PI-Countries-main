const { Router } = require("express");
const { Country } = require("../db.js");
const axios = require("axios");
const router = Router();
//const paises = require("../../../countries.json")

router.get("/", async (req, res) => {
    try {
        //const paises2= (await axios.get("https://restcountries.com/v3/all")).data;    
        const paises= (await axios.get("https://restcountries.com/v2/all")).data;
        let resultFN=[]
        
        // for (let index = 0; index < paises.length; index++) {
        //     const {alpha3Code, name, subregion, region, capital,  area, population}=paises[index];
        //     let p = paises2.filter(e => e.cca3 === paises[index].alpha3Code)
        //     const pais = await Country.create({id: alpha3Code, nombre: name, img: p[0].flags[1],
        //         continente: region,  capital, subregion, area: parseFloat(area), poblacion: parseFloat(population)}
        //     );
        //    resultFN=[...resultFN, pais]; 
        // } 

        for (let index = 0; index < paises.length; index++) {
            const {alpha3Code, name, flags, subregion,  region, capital,  area, population}=paises[index];
            const pais = await Country.create({id: alpha3Code, nombre: name, img: flags.svg,
                continente: region,  capital, subregion, area: parseFloat(area), poblacion: parseFloat(population)}
            );
            resultFN=[...resultFN, pais];            
        }
        res.json(resultFN);        
    } catch (error) {
        
        res.send("Error API: "+error)
    }

})
        
        






module.exports = router;