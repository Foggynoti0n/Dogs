const { Router } = require("express");
const { getDogsHandler }  = require("../handlers/getDogsHandler.js");
const {dogsIdHandler}= require('../handlers/getDogsIdHandler.js');
const { postHandler } = require("../handlers/postDogsHandler.js");
// const {getDriverIdHandler}= require ("../handlers/getDriversHandler.js");
// const {postHandler}= require("../handlers/postHandler.js")
  const dogsRouter = Router();

dogsRouter.get("/", getDogsHandler);
dogsRouter.get("/:id", dogsIdHandler );
dogsRouter.post("/", postHandler )

module.exports= dogsRouter