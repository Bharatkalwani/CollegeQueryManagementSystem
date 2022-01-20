const mongoose = require('mongoose');

const Parent = mongoose.model("Parent", new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    content: {
        type: String,
    },
    replyParent: {
        type: Array,
    },
},
    {
        timestamps: true
    })
)

module.exports = Parent;
