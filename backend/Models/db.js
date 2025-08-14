const mongoose = require("mongoose");

const mongoUrl = process.env.MONGOURL;

mongoose.connect(mongoUrl).then(() => {
    console.log("MongoDB connected...");
}).catch((err) =>{
    console.log("connnection error", err);
})
