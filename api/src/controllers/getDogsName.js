const axios = require("axios");
const { Op } = require("sequelize");
const {URL, API_KEY}= process.env
const { Dogs, Temperaments } = require("../db.js");

//obtener dogbyNAME de la API
const getDogsName = async (name) => {
  
        //Consulta api y almacenaje data en apiDogs
        const response = await axios(`${URL}?api_key=${API_KEY}`);
        let apiDogs = response.data;

        if (name) {
            apiDogsFiltered = apiDogs
                .filter((dog) =>
                    dog.name.toLowerCase().includes(name.toLowerCase())
                )
                .map((dog) => {
                    return {
                        id: dog.id,
                        name: dog.name,
                        weight_min: parseInt(dog.weight.metric.slice(0, 2).trim()),
                        weight_max: parseInt(dog.weight.metric.slice(4).trim()),
                        height_min: parseInt(dog.height.metric.slice(0, 2).trim()),
                        height_max: parseInt(dog.height.metric.slice(4).trim()),
                        life_span: dog.life_span,
                        image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
                        Temperaments: dog.temperament,
                        created: false
                    };
                });
        }

        //Consulta a la DB y almacenaje data en dbDogs
        let dogDb = await Dogs.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
            include: 
                {
                    model: Temperaments,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                },
            
        });


    const mapDbDog= dogDb?.map((d)=>{
        return {
          id: d.id,
          name: d.name,
          created: d.created,
        weight_min:d.weight_min,
        weight_max: d.weight_max,
        height_min: d.height_min,
        height_max: d.height_max,
          life_span: d.life_span,
          image: d.image,
          Temperaments:d.Temperaments.map((t)=> t.name).toString()
        }
      })
    


        const allDogs = [...apiDogsFiltered, ...mapDbDog];
        if (allDogs.length) {
        return allDogs
            
        } else {
            return 'No existen Razas con ese nombre'
        }
 
};

module.exports = { getDogsName };