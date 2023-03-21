const Person = require('../Modules/Person');

exports.addPerson = async (req,res) =>{
    try{
        const found = await Person.findOne({ email: req.body.email});
        if (found) {
            res.status(400).send('email exists');
        }
        const person = new Person(req.body);
        await person.save();
        res.status(200).send('person added');
    }catch(error){
        res.status(500).send({msg:"person not added"});
    }
}
///// get all persons

exports.getAllPersons = async (req, res) => {
    try {
      const persons = await Person.find();
      res.status(200).send({ msg: "list of persons", persons });
    } catch (error) {
      res.status(500).send({ msg: "could not get list of persons" });
    }
  };
  
  ////// get one person
  
  exports.getPerson = async (req, res) => {
    try {
      const { id } = req.params;
      const person = await Person.findById(id);
      res.status(200).send({ msg: "person found", person });
    } catch (error) {
      res.status(500).send({ msg: "could not get the person" });
    }
  };
  
  ///// delete one person
  
  exports.deletePerson = async (req, res) => {
    try {
      const { id } = req.params;
      await Person.findByIdAndDelete(id);
      res.status(200).send({ msg: "person deleted" });
    } catch (error) {
      res.status(500).send({ msg: "could not delete person" });
    }
  };
  
  ////// update person
  
  exports.updatePerson = async (req, res) => {
    try {
      const { id } = req.params;
      await Person.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ msg: "person updated" });
    } catch (error) {
      res.status(500).send({ msg: "could not update person" });
    }
  };
  
  /////// query chain by favfood and sorting
  
  exports.findPersonByQueryChain = async (req, res) => {
    try {
      const fav="djeja"
      const person = await Person.find({
        favouriteFood: { $all: [fav] },
      }).sort({ age: "asc" });
      res.status(200).send({ msg: "found", person });
    } catch (error) {
      res.status(500).send({ msg: "not found" });
    }
  };
  
  ///// query chain by age
  
  exports.filterPersonByAge = async(req,res)=>{
      try {
          const agelim =27
          const person = await Person.find({age:{$gt:agelim}})
          .sort({age:"asc"})
          res.status(200).send({msg:"found",person})
      } catch (error) {
          res.status(500).send({ msg: "not found" });
      }
  }