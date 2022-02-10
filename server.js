const express = require('express');
const {MongoClient, ObjectId} = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const url = "mongodb+srv://antonmerkotun:1996178dD@instagram.9subi.mongodb.net/insta?retryWrites=true&w=majority";
const client = new MongoClient(url);
const PORT = 3005

client.connect(err => {
    const usersCollections = client.db("insta").collection("users");
    const postsCollections = client.db("insta").collection("posts");
    const commentsCollections = client.db("insta").collection("comments");

//GET

//User
    app.get('/users', async function (req, res) {
        const users = await usersCollections.find({}).toArray();
        res.send(users);
    })
    app.get('/user/:id', async function (req, res) {
        const id = req.params.id
        const users = await usersCollections.find({_id: ObjectId(id)}).toArray();
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

//
//
//
//
    app.listen(PORT, () => {
        console.log(`Connected server to port ${PORT}`)
    });
});


// client.connect(err => {
// const usersCollections = client.db("instagram").collection("users");
// const accountCollections = client.db("instagram").collection("account");

//GET

//User

//     app.get('/users', async function (req, res) {
//         const allUsers = await usersCollections.find({}).toArray();
//         res.send(allUsers);
//     })
//
//     app.get('/user/:id', async function (req, res) {
//         const id = req.params.id
//         const user = await usersCollections.find({_id: ObjectId(id)}).toArray();
//         res.send(user);
//     })
//
//     app.get('/user/:id/posts', async function (req, res) {
//         const id = req.params.id
//         const user = await usersCollections.find({_id: ObjectId(id)}).toArray();
//         const posts = user.map(elem => {
//             return elem.posts
//         })
//         res.send(posts);
//     })
//
//     app.get('/post/:id', async function (req, res) {
//         const id = req.params.id
//         let post;
//         const userAll = await usersCollections.find({}).toArray();
//         userAll.forEach(elem => {
//             elem.posts.forEach(e => {
//                 if (String(e._id) === id) {
//                     post = e;
//                 }
//             })
//         })
//         res.send(post);
//     })

//Account
//     app.get('/account', async function (req, res) {
//         const findResult = await accountCollections.find({}).toArray();
//
//         res.send(findResult);
//     })

//POST


// app.post('/post/:id', async function (req, res) {
//     const userData = req.body
//     console.log(userData)
//
//     const id = req.params.id
//     let post;
//     const userAll = await usersCollections.find({}).toArray();
//     userAll.forEach(elem => {
//         elem.posts.forEach(e => {
//             if (String(e._id) === id) {
//                 post = e;
//             }
//         })
//     })
//     post.comments.push(userData)
//     console.log(post.comments)
//     // const insertResult = await usersCollections.insertMany([userData]);
//
//     res.sendStatus(200)
// })


// app.listen(PORT, () => {
//     console.log(`Connected server to port ${PORT}`)
// });
// });