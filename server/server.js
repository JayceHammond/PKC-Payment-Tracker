const express = require('express');
const app = express();
const port = 5000;
const {MongoClient} = require("mongodb");

const URI = require("../DatabaseURI.js");
const uri = URI.getURI();

app.listen(port, () => {console.log("Server started on port " + port)});

app.get("/api", (req, res) => {
    const client = new MongoClient(uri);
    const database = client.db("PKCPaymentTracker");
    const students = database.collection("Students");
    async function run(){
        try{
            let results = await students.find({}).limit(50).toArray();
            res.json({"students": results});
        }finally {
            await client.close();
            console.log("No students found");
        }
    }
    run().catch(console.dir);
    //res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})

