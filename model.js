/* done */
const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    coursename : {
        type : String,
        required: true
    },
    courseduration : {
        type:Number ,
        required: true,
        
    },
    coursefees : {
        type:Number ,
        required: true,
        
    },
    
})

const Coursedb = mongoose.model('course', courseSchema);

module.exports = Coursedb;