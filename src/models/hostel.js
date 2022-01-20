const mongoose = require('mongoose');

const Hostel = mongoose.model("hostel", new mongoose.Schema({

    // email:String,
    // name:String,
    // hostel_no:Number,
    // room_no:Number,
    // content:String,
    // year:Number,
    // replyHostel:Array,
        
        email:{
            type:String,
            required:true,
            trim:true,
            lowercase:true,
           // unique:true,  
        },
        name:{
            type: String,    
        },
        hostel_no:{
            type: Number,    
        },
        room_no:{
            type: Number,    
        },
        content:{
            type: String, 
        },
        year:{
            type: Number,    
        },
        replyHostel:{
            type: Array,    
        },
   },
        {
            timestamps: true
        })
)

module.exports = Hostel;
