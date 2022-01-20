const mongoose = require('mongoose');

const teacherComplain = mongoose.model("teacher", new mongoose.Schema({

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

module.exports = teacherComplain;
