const axios = require("axios");
require("dotenv").config();
const api_key = process.env.API_KEY;
const URL = "https://api.thedogapi.com/v1/breeds";
const { Dogs, Temperaments } = require("../db.js");


const dogsIdController= async (id,source) => {

    let response = source === "api"
    ? await axios(`${URL}/${id}?api_key=${api_key}`)
    :await Dogs.findByPk(id,{ 
     
      include: {
        model:Temperaments,
        as: 'Temperaments',
        attributes: ["name"],
        through: { attributes: [] }, 
  
      }

    });

    if (source === "api") {

       const { name,height, weight,life_span,reference_image_id,temperament} = response.data
       
       const responseApi= { 
                    id,
                    name,
                    created: false,
                  weight_min: parseInt(weight.metric.slice(0, 2).trim()),
                  weight_max: parseInt(weight.metric.slice(4).trim()),
                  height_min: parseInt(height.metric.slice(0, 2).trim()),
                  height_max: parseInt(height.metric.slice(4).trim()),
                    life_span,
                    image: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
                    Temperaments:temperament,
                       };
        
         
        return responseApi;
      } else {
    
        const mapDbDog= {
          id: response.id,
          name: response.name,
          created: response.created,
        weight_min:response.weight_min,
        weight_max: response.weight_max,
        height_min: response.height_min,
        height_max: response.height_max,
          life_span: response.life_span + ' years',
          image: response.image,
          Temperaments: response.Temperaments.map((t)=> t.name).toString()
        }
        return mapDbDog;
      }

      
};



module.exports={
dogsIdController
}