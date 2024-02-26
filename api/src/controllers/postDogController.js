require('dotenv').config();
const {Temperaments, Dogs} = require('../db.js');


const postDog = async (name,id,image, temperament, created, life_span,height_min,
    height_max,
    weight_min,
    weight_max) => {

    const dogCreated = await Dogs.create({
              
        name,
        id,
        image,
        created, 
        life_span,
        height_min,
        height_max,
        weight_min,
        weight_max  
  })

  let DogTemp = await Temperaments.findAll({
  where: {
      name: temperament
  }
  })
  
  
  await dogCreated.addTemperaments(DogTemp)
  return dogCreated
    
    
  }

  module.exports={ postDog}