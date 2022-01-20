const mongoose = require('mongoose');

const suggestion = mongoose.model("suggestion", new mongoose.Schema({

    name: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    branch: {
        type: String,
    },
    year: {
        type: String,
    },
    section: {
        type: String,
    },
},
    {
        timestamps: true
    })
)

module.exports = suggestion;
