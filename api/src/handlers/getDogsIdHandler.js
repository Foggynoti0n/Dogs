const { dogsIdController } = require("../controllers/dogsIdController");


const dogsIdHandler= async(req,res)=>{

    const {id} = req.params;
  
    //valido si es o no un número, para saber si lo busco en la api o en la db
    const source = isNaN(id) ?"bdd" :"api";
  
    try {
        const response= await dogsIdController(id, source)
        res.status(200).json(response);
        
    } catch (error) {
  
        res.status(400).json({error:error.message});
    }
  
  
  }
  
  module.exports={ dogsIdHandler}