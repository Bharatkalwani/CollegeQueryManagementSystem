const mongoose = require('mongoose');

const College = mongoose.model("College", new mongoose.Schema({


    email:{
            type:String,
            required:true,
            trim:true,
            lowercase:true,
            unique:true,  
        },
        name:{
            type: String,    
        },
        title:{
            type: String,    
        },
        content:{
            type: String, 
        },
        teacher:{
            type: String, 
        },
        branch:{
            type: String, 
        },
        section:{
            type: String, 
        },
        year:{
            type: Number,    
        },
        reply:{
            type: Array,    
        },
   },
        {
            timestamps: true
        })
)

module.exports = College;
