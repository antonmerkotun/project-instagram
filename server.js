const express = require('express');
const {MongoClient, ObjectId} = require('mongodb')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const url = "mongodb+srv://antonmerkotun:1996178dD@instagram.9subi.mongodb.net/insta?retryWrites=true&w=majority";
const client = new MongoClient(url);
const PORT = 3005

client.connect(err => {

///////////////////////////////GET
    const usersCollections = client.db("instagram").collection("users");


    app.get('/users', async function (req, res) {
        const allUsers = await usersCollections.find({}).toArray();
        res.send(allUsers);
    })

    app.get('/user/:id', async function (req, res) {
        const id = req.params.id
        const user = await usersCollections.find({_id: ObjectId(id)}).toArray();
        res.send(user);
    })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    app.get('/user/:id/posts', async function (req, res) {
        const id = req.params.id
        const user = await usersCollections.find({_id: ObjectId(id)}).toArray();
        const posts = user.map(elem => {
            return elem.posts
        })
        res.send(posts);
    })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    app.get('/post/:id', async function (req, res) {
        const id = req.params.id
        let post;
        const userAll = await usersCollections.find({}).toArray();
        userAll.forEach(elem => {
            elem.posts.forEach(e => {
                if (String(e._id) === id) {
                    post = e;
                }
            })
        })
        res.send(post);
    })


//////////////////////////


    const accountCollections = client.db("instagram").collection("account");
    app.get('/account', async function (req, res) {
        const findResult = await accountCollections.find({}).toArray();

        res.send(findResult);
    })

////////////////////////////////


    // const userPosts = client.db("instagram").collection("users");
    // app.post('/users/post/:id', async function (req, res) {
    //     const id = req.params.id
    //
    //     const findResult = await userPosts.find({_id: ObjectId(id)}).toArray();
    //
    //     res.send(findResult);
    // })

    // app.post('/users', async function (req, res) {
    //     const userData = req.body
    //
    //     const insertResult = await usersCollections.insertMany([userData]);
    //
    //     res.sendStatus(200)
    // })

    app.listen(PORT, () => {
        console.log("Connected server instagram")
    });
});