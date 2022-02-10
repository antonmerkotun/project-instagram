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
            firstName: 'Reno',
            lastName: 'Romeu',
            nickName: 'renoromeu'
        },
        avatar: 'https://res.cloudinary.com/dxs9ky1l7/image/upload/v1643472888/users/Reno%20Romeu/avatar/RenoRomeu_avatar.jpg'
    })

    user.save(function (err) {
        if (err) throw err;

        console.log('User successfully saved.')

        const firstPost = new Post({
            _id: new mongoose.Types.ObjectId(),
            user: user._id,
            image: 'https://res.cloudinary.com/dxs9ky1l7/image/upload/v1643473576/users/Reno%20Romeu/posts/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2022-01-29_%D0%B2_18.26.09_rfzl4a.png'
        })

        firstPost.save(function (err) {
            if (err) throw err

            console.log('Post successfully saved.')

            const firstPostCommentOne = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Коментарий 1 первого поста'
            })
            firstPostCommentOne.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })

            const firstPostCommentTwo = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Коментарий 2 первого поста'
            })
            firstPostCommentTwo.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })
        })

        const secondPost = new Post({
            _id: new mongoose.Types.ObjectId(),
            user: user._id,
            image: 'https://res.cloudinary.com/dxs9ky1l7/image/upload/v1643472967/users/Reno%20Romeu/posts/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2022-01-29_%D0%B2_18.16.03_wguicg.png'
        })

        secondPost.save(function (err) {
            if (err) throw err

            console.log('Post successfully saved.')

            const firstPostCommentOne = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Коментарий 1 второго поста'
            })
            firstPostCommentOne.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })

            const firstPostCommentTwo = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Коментарий 2 второго поста'
            })
            firstPostCommentTwo.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })
        })

        const thirdPost = new Post({
            _id: new mongoose.Types.ObjectId(),
            user: user._id,
            image: 'https://res.cloudinary.com/dxs9ky1l7/image/upload/v1643472942/users/Reno%20Romeu/posts/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2022-01-29_%D0%B2_18.15.37_tvtxyy.png'
        })

        thirdPost.save(function (err) {
            if (err) throw err

            console.log('Post successfully saved.')

            const firstPostCommentOne = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Коментарий 1 третьего поста'
            })
            firstPostCommentOne.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })

            const firstPostCommentTwo = new Comment({
                _id: new mongoose.Types.ObjectId(),
                user: user._id,
                post: firstPost._id,
                text: 'Коментарий 2 третьего поста'
            })
            firstPostCommentTwo.save(function (err) {
                if (err) throw err

                console.log('Comment successfully saved.')
            })
        })
    })
})