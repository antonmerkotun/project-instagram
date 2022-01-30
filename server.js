const express = require('express');
const {MongoClient} = require('mongodb')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const url = "mongodb+srv://antonmerkotun:1996178dD@instagram.9subi.mongodb.net/insta?retryWrites=true&w=majority";
const client = new MongoClient(url);


client.connect(err => {
    console.log("Connected server instagram")

///////////////////////////////GET

    const usersCollections = client.db("instagram").collection("users");
    app.get('/users', async function (req, res) {
        const findResult = await usersCollections.find({}).toArray();

        res.send(findResult);
    })

    const accountCollections = client.db("instagram").collection("account");
    app.get('/account', async function (req, res) {
        const findResult = await accountCollections.find({}).toArray();

        res.send(findResult);
    })

////////////////////////////////




    // app.post('/users', async function (req, res) {
    //     const userData = req.body
    //
    //     const insertResult = await usersCollections.insertMany([userData]);
    //
    //     res.sendStatus(200)
    // })

    app.listen(3005);
});