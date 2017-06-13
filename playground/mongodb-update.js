//const MongoClient = require("mongodb").MongoClient;
//Destructuring thanks to ES6
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server...");
    }
    console.log("Connected to MongoDB Server!");

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("593f6f3313f8f8c567841f5b")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5934d76f80835509e41894af")
    }, {
        $set: {
            name: "Ryan Szotak"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});