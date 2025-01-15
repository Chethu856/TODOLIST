const express = require('express')
const { getAllToDo, createToDo, updateToDo, deleteToDo } = require('../Controllers/todoCtrl')



const todoRouter = express.Router()

// get->read
//post->send/craete
//put-> update
//delete->delete


//http://localhost:5000/getall'
todoRouter.get('/getall', getAllToDo)
todoRouter.post('/', createToDo)
todoRouter.put('/updateToDo/:id', updateToDo)
todoRouter.delete('/deleteToDo/:id', deleteToDo)

module.exports = todoRouter