const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String,
        nickName: {
            type: String,
            required: true
        }
    },
    avatar: String,
    subscriptions: {
        type: Boolean,
        required: true
    },

    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;