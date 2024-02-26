const {postDog}= require('../controllers/postDogController')


const postHandler = async (req,res)=>{
    const {     
        name,
        id,
        image,
        temperament, 
        created, 
        life_span,
        height_min,
        height_max,
        weight_min,
        weight_max, 
           }= req.body;
   
       try {
   
    const newDog= await postDog(
        name,
        id,
        image,
        temperament, 
        created, 
        life_span,
        height_min,
        height_max,
        weight_min,
        weight_max );
       
       res.status(200).json(newDog);
   
       } catch (error) {
   
           res.status(400).json({
               error: error.message
           });
       }
   };
   
   module.exports={
      postHandler
   }