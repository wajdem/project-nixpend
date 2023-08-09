require('dotenv').config()

const express = require("express")


// express app
const app = express()

app.use((req, res, next) =>{
    console.log(req.path, res.method);
    next()
})

//routes  
app.get('/', (req, res) =>{
    res.json({mssg:"Welcome to the app"})

})

//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log("listening on port 8686!!!");
})

process.env