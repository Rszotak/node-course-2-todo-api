var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose.js");
var {ObjectId} = require("mongodb");
var {Todo} = require("./models/todo.js");
var {User} = require("./models/user.js");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos: todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

//GET /todos/<id>
app.get("/todos/:id", (req, res) => {
    var id = req.params.id;

    if(!ObjectId.isValid(id)){
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            res.status(404).send();
        }
        res.send({todo: todo});
    }, (e) => {
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log("Started on port 3000");
});

module.exports = {
    app: app
}