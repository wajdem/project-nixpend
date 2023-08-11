require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
import cars from "cars";


//express app
const app = express();

app.use(cars())

//connect to db
mongoose.connect(process.env.MONG_URL)
.then(() =>{
    //listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to  db & listening on port' , process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
})