require('dotenv').config();
const axios = require('axios');
const {URL, API_KEY} = process.env;
const {Temperaments} = require('../db.js');



const temperamentsController = async() => {
  
        const apiResponse = (await axios(`${URL}?api_key=${API_KEY}`)).data;
       
        const temperaments = new Set(
            apiResponse
                .map(dog => dog.temperament) //obtengo los temperamentos de cada objeto
                .join(",") //uno todos los temperamentos en un solo string separados por ,
                .split(",") //convierto el string en un array 
                .filter((temperament) => temperament.trim().length > 0)
                .sort())

         Array.from(temperaments).map((temperament) =>
            Temperaments.findOrCreate({ where: { name: temperament  } })
        );

        const temperamentsDB = await Temperaments.findAll();

        // console.log("Temperamentos de la BD:", temperamentsDB);

        return temperamentsDB
 
};

module.exports = {
    temperamentsController,
};