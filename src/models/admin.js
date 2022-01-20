const mongoose = require('mongoose');

const admin = mongoose.model("loginAdmin", new mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,

    },
    
},
    {
        timestamps: true
    })
)

module.exports = admin;
