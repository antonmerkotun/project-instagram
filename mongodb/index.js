const mongoose = require('mongoose')

const User = require('./user')
const Post = require('./post')
const Comment = require('./comment')

mongoose.connect('mongodb+srv://antonmerkotun:1996178dD@instagram.9subi.mongodb.net/insta?retryWrites=true&w=majority', function (err) {
    if (err) throw err

    console.log('Successfully connected')


    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Chris',
            lastName: 'Ishe',
            nickName: 'Architecture'
        },
        avatar: 'https://res.cloudinary.com/dxs9ky1l7/image/upload/v1643638901/users/Architecture%20Ishe/avatar/40077369_481968155615391_4343544733327425536_n_wrodgj.jpg'
    })

    user.save(function (err) {
        if (err) throw err;

        console.log('User successfully saved.')

        const firstPost = new Post({
            _id: new mongoose.Types.ObjectId(),
            user: user._id,
            image: 'https://res.cloudinary.com/dxs9ky1l7/image/upload/v1643638976/users/Architecture%20Ishe/posts/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA3_uf63e4.jpg'
        })

        firstPost.save(function (err) {
            if (err) throw err

            console.log('Post successfully saved.')

            const firstPostCommentOne = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Комментарий 1 первого поста'
            })
            firstPostCommentOne.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })

            const firstPostCommentTwo = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Комментарий 2 первого поста'
            })
            firstPostCommentTwo.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })
        })

        const secondPost = new Post({
            _id: new mongoose.Types.ObjectId(),
            user: user._id,
            image: 'https://res.cloudinary.com/dxs9ky1l7/image/upload/v1643638976/users/Architecture%20Ishe/posts/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_my2rpc.jpg'
        })

        secondPost.save(function (err) {
            if (err) throw err

            console.log('Post successfully saved.')

            const firstPostCommentOne = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Комментарий 1 второго поста'
            })
            firstPostCommentOne.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })

            const firstPostCommentTwo = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Комментарий 2 второго поста'
            })
            firstPostCommentTwo.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })
        })

        const thirdPost = new Post({
            _id: new mongoose.Types.ObjectId(),
            user: user._id,
            image: 'https://res.cloudinary.com/dxs9ky1l7/image/upload/v1643638976/users/Architecture%20Ishe/posts/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA2_wycgtc.jpg'
        })

        thirdPost.save(function (err) {
            if (err) throw err

            console.log('Post successfully saved.')

            const firstPostCommentOne = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Комментарий 1 третьего поста'
            })
            firstPostCommentOne.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })

            const firstPostCommentTwo = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Комментарий 2 третьего поста'
            })
            firstPostCommentTwo.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })
        })
    })
})