const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOBD_URI);
        console.log("MongoDB Connected...");
    }
    catch(err){
        console.error("there is an issues with connection",err);
        throw(err);
    }
}

module.exports = connectDB; //default export