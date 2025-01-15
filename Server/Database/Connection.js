// mongodb+srv://kulalchethana67:98765432100@cluster0.16u2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose = require('mongoose')

function RunServer() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb connected!')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = RunServer