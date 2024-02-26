const { getAllDogs } = require("../controllers/getDogsController");
const {getDogsName}= require('../controllers/getDogsName.js')


const getDogsHandler = async (req, res) => {
    const { name } = req.query;
    try {
      const results = name
        ? await getDogsName(name)
        : await getAllDogs(); 
  
      res.status(200).json(results);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports= { getDogsHandler}