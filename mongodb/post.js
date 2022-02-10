const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String,
    create: {
        type: Date,
        default: Date.now,
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;