const Todo = require("../models/todo");


const createToDo = async(req, res) => {
    const { message } = req.body;

    if (req.body.message === "") {
        return res.status(401).json({errorMessage: "Message cannot be empty" });
    }

    // Validation : Check if message is empty or does not meet the length requirements
    if (!message || message.length < 4 || message.length > 20 ) {
        return res
        .status(400)
        .json({errorMessage: "Message must be between 4 and 20 characters."});
    }

    try {
        const addToDo = await Todo.create({ message});
        res.status(200).json({ success: "created", data: addToDo });
    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error" });
    }
};

const getAllToDo = async (req, res) => {
    try {
        const getToDo = await Todo.find({});
        res.status(200).json({data: getToDo });
    } catch (error) {
        console.log(error);
        
    }
};

// When you see an empty {} object passed to the  .find()method, it means that function is requesting all the
// documents from the collection.

const deleteToDo = async (req, res) => {
    try {
        const deleted = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: "deleted" ,data:deleted});
        
    } catch (error) {
        console.log(error);
        
    }
    
};

// findByIdAndDelete(): This is a Mongoose method that performs two actions in one step:
//Find a document by its_id field.
//Delete the document from the collection.

//req.params.id refers to the ID of the ToDo ITEM THAT YOU WANT RO DELETE, WHICH IS PASES IN THE url. for example, 
// if the route is /delete/:id, req.params.id will contain the value of that id.

// A client makes a request to an endpount like;
// DELETE/ todo/12345abcdef
//where 12345abcdef is the ID of the ToDo item to be deleted.

// Route Handler:
// The ID (12345abcdef) gets assigned to req.params.id.

//Mongoose Operation:
//findByIdAndDelete (req.params.id) runs and looks for the document with _id: 12345abcdef in the MongoDB
//Collection.

// deletion Outcome:
// If Found,the document is deleted and returned to the deleted variable.
// If not found , deleted will be null.

const updateToDo = async (req, res) => {
    try {
        const updateToDo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                message: req.body.message,
            },
            { new: true }
        );
        if (updateToDo) {
            res.json({ success: "updated", data: updateToDo });
        }else{
            res.status(404).json({error: "Todo not found" });
        }
        
    } catch (error) {
        res.status(400).json({error: error.message });
        
    }
};

// {new: true }: this option tells Mongoose to return the updated document instead of the old one. Without {
// new: true}. Mongoose would the document as it was before the update.
//This ensures thet the newly updated version of the document is returned

module.exports = {
    createToDo,    //if you want to export all the function. then uhh have to use brackets.
    getAllToDo,
    updateToDo,
    deleteToDo,
}