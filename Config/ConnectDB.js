const mongoose = require('mongoose')

const ConnectDB = async() =>{
    try{
        mongoose.set('strictQuery',true)
        await mongoose.connect('mongodb://127.0.0.1:27017')
    }catch(error){
        console.log(error)
    }
}
module.exports = ConnectDB;