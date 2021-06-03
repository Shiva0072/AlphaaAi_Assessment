const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Todos");

const db=mongoose.connection;

db.on('error',console.error.bind(console,'connection error : '));
db.once('open',function(){
    console.log("DB server is up and running ");
});