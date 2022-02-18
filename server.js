const express = require('express');
const {MongoClient, ObjectId} = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const url = "mongodb+srv://antonmerkotun:1996178dD@instagram.9subi.mongodb.net/insta?retryWrites=true&w=majority";
const client = new MongoClient(url);
const PORT = process.env.PORT || 3005

client.connect(err => {
    const usersCollections = client.db("insta").collection("users");
    const postsCollections = client.db("insta").collection("posts");
    const commentsCollections = client.db("insta").collection("comments");


//GET
//Account
    app.get('/account', async function (req, res) {
        const findResult = await usersCollections.find({account: true}).toArray();
        res.send(findResult);
    })


//User
    app.get('/users', async function (req, res) {
        const users = await usersCollections.find({}).toArray();
        res.send(users);
    })
    app.get('/user/:id', async function (req, res) {
        const id = req.params.id
        const user = await usersCollections.find({_id: ObjectId(id)}).toArray();
        res.send(user);
    })

    app.get('/users/sub/true', async function (req, res) {
        const users = await usersCollections.find({subscriptions: true}).toArray();
        res.send(users);
    })
    app.get('/users/sub/false', async function (req, res) {
        const users = await usersCollections.find({subscriptions: false}).toArray();
        res.send(users);
    })


//Posts
    app.get('/posts', async function (req, res) {
        const posts = await postsCollections.find({}).toArray();
        res.send(posts);
    })
    app.get('/post/:id', async function (req, res) {
        const id = req.params.id
        const posts = await postsCollections.find({_id: ObjectId(id)}).toArray();
        res.send(posts);
    })

//Comments
    app.get('/comments', async function (req, res) {
        const comments = await commentsCollections.find({}).toArray();
        res.send(comments);
    })
    app.get('/comment/:id', async function (req, res) {
        const id = req.params.id
        const comments = await commentsCollections.find({_id: ObjectId(id)}).toArray();
        res.send(comments);
    })

////////
////////
////////
////////
////////

//POST
//Subscriptions
    app.post('/users/sub/set/:id', async function (req, res) {
        const userData = req.body
        const id = req.params.id
        const account = await usersCollections.updateOne({_id: ObjectId(id)}, {$set: userData});
        res.sendStatus(200);
    })

    app.post('/users/post/comment/add', async function (req, res) {
        const commentData = req.body
        const comment = await commentsCollections.insertMany([
            {
                user: ObjectId(commentData.user),
                post: ObjectId(commentData.post),
                text: commentData.text
            }]);
        res.sendStatus(200);
    })

//Favorite
    app.post('/users/fav/set/:id', async function (req, res) {
        const userData = req.body
        const id = req.params.id
        const post = await postsCollections.updateOne({_id: ObjectId(id)}, {$set: userData});
        res.sendStatus(200);
    })


//
//
//
//
//
//
//
    app.listen(PORT, () => {
        console.log(`Connected server to port ${PORT}`)
    });
});
