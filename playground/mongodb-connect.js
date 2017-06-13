//const MongoClient = require("mongodb").MongoClient;
//Destructuring thanks to ES6
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server...");
    }
    console.log("Connected to MongoDB Server!");

    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert Todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Insert new doc into Users collection (name, age, location)
    // db.collection("Users").insertOne({
    //     name: "Ryan Szotak",
    //     age: 25,
    //     location: "Irvine, CA"
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to add user to DB", err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});