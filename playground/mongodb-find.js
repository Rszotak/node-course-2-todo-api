//const MongoClient = require("mongodb").MongoClient;
//Destructuring thanks to ES6
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server...");
    }
    console.log("Connected to MongoDB Server!");

    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection("Users").find({name: "Miranda"}).toArray().then((docs) => {
        console.log("Users found:");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch users", err);
    });
    db.collection("Users").find({name: "Miranda"}).count().then((count) => {
        console.log(`Number of users found with that name: ${count}`);
    }, (err) => {
        console.log("Unable to fetch users", err);
    });

    //db.close();
});