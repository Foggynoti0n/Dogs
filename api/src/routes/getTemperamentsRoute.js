const {Router}= require('express')
const { temperamentsHandler } = require('../handlers/getTemperamentsHandler')


const temperamentsRouter= Router()

temperamentsRouter.get('/', temperamentsHandler)

module.exports= temperamentsRouter