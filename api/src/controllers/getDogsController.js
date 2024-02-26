
const axios = require ('axios');
const {Dogs, Temperaments} = require ('../db')
const {URL, API_KEY}= process.env


const getAllDogs = async () => {

  const response = await Dogs.findAll({
        include: {
          model: Temperaments,
          as: 'Temperaments',
          attributes: ["name"], 
          through: {
            attributes: [], 
          },
        },
      });

      const mapDbDog= response?.map((t)=>{
        return {
          id: t.id,
          name: t.name,
          created: t.created,
        weight_min:t.weight_min,
        weight_max: t.weight_max,
        height_min: t.height_min,
        height_max: t.height_max,
          life_span: t.life_span,
          image: t.image,
          Temperaments:t.Temperaments.map((t)=> t.name).toString()
        }
      })
     
        
const infoApi = await axios (`${URL}/?api_key=${API_KEY}`)
const dogsFiltered = infoApi?.data.map (dog => {

                return {
                  id: dog.id,
                  name: dog.name,
                  weight_min: parseInt(dog.weight.metric.slice(0, 2).trim()),
                  weight_max: parseInt(dog.weight.metric.slice(4).trim()),
                  height_min: parseInt(dog.height.metric.slice(0, 2).trim()),
                  height_max: parseInt(dog.height.metric.slice(4).trim()),
                  life_span: dog.life_span, 
                  image:`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
                  Temperaments: dog.temperament,
                  created: false
              };
                }
)
      
        const finalArr= [...mapDbDog, ...dogsFiltered]
        return finalArr
};





module.exports = {
getAllDogs,
}