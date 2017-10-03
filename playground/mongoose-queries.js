const {ObjectId} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require('./../server/models/todo');
const {User} = require("./../server/models/user");

// var id = '59702d785ee5f735f8f9ff7511';

// if(!ObjectId.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todoID) => {
//     if(!todoID){
//         return console.log("ID not found");
//     }
//     console.log('TodoID', todoID);
// }).catch((e) => {
//     console.log(e);
// });

var userID = '596d7b6bfd1dec27c8c36925';

User.findById(userID).then((user) => {
    if (!user) {
        return console.log("User not found");
    }
    console.log("User", userID);
}, (e) => {
    console.log(e);
});