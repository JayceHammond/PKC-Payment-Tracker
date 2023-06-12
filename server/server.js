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
            let documents = new Array;
            results.forEach(element => {
                let lastName;
                if(element.LastName === undefined){
                    lastName = "";
                }else{
                    lastName = element.LastName;
                }
               documents.push(JSON.stringify(element.FirstName + " " + lastName));
            });

            res.json({"students": documents});
        }finally {
            await client.close();
        }
    }
    run().catch(console.dir);
    //res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})

app.get("/api/student/:name", (req, res) =>{
    const client = new MongoClient(uri);
    const database = client.db("PKCPaymentTracker");
    const students = database.collection("Students");
    async function run(){
        try{
            const firstNameQuery = req.params.FirstName;
            const lastNameQuery = req.params.LastName;
            let result = await students.findOne({firstNameQuery});
            
            res.json({result});
        }finally{
            await client.close();
        }
    }
    run().catch(console.dir);
})
