const express = require("express");
const {addPerson,getAllPersons,getPerson,deletePerson,updatePerson,findPersonByQueryChain, filterPersonByAge,} = require("../Controllers/Person");

const personRouter = express.Router();

personRouter.post("/addPerson", addPerson);

personRouter.get("/allPersons", getAllPersons);

personRouter.get("/Person/:id", getPerson);

personRouter.delete("/deletePerson/:id", deletePerson);

personRouter.put("/updatePerson/:id", updatePerson);

personRouter.get("/test", findPersonByQueryChain);

personRouter.get('/getByAge',filterPersonByAge)

module.exports = personRouter;