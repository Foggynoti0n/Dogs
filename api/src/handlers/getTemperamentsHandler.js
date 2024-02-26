const {temperamentsController} = require("../controllers/getTemperamentsController")

const temperamentsHandler =  async (req,res)=>{

    try {

        const getTemp= await temperamentsController()

        res.status(200).json(getTemp)

    } catch (error) {
        
        return res.status(400).json({error: error.message})
    }
}
;

module.exports = {temperamentsHandler};
