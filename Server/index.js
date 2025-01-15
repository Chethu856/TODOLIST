require('dotenv').config()        
const express = require('express');                  
const cors = require('cors');
const RunServer = require('./Database/Connection');      //dont type
const todoRouter = require('./Routes/todoRoutes');



const app = express();        //2
const port = 5000;             //3

   

// json : javascript object notation
// used to transfer the data
app.use(express.json())              //4
app.use(cors())

RunServer()           //5

app.use('/todolist' ,todoRouter)

app.listen(port , ()=> {              //6
    console.log(`server is running on ${port}`)
})