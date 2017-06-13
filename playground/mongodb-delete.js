//const MongoClient = require("mongodb").MongoClient;
//Destructuring thanks to ES6
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server...");
    }
    console.log("Connected to MongoDB Server!");

    //deleteMany
    // db.collection("Todos").deleteMany({text: "eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection("Todos").deleteOne({text: "eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //deleteMany for dupes
    // db.collection("Users").deleteMany({name: "Ryan Szotak"}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Unable to delete all instances of provided user...", err);
    // });

    //findOneAndDelete --> find it by id
    // db.collection("Users").findOneAndDelete({
    //     _id: new ObjectID("5934d9c824aed82af4a0aa80")
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Unable to delete selected user", err);
    // });

    //db.close();
});