const express = require("express")


// express app
const app = express()

//routes  
app.get('/', (req, res) =>{
    res.json({mssg:"Welcome to the app"})

})

//listen for requests
app.listen(8686, ()=>{
    console.log("listening on port 8686!!!");
})