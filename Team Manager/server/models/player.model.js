const mongoose = require('mongoose');

const PlayerSchema =new mongoose.Schema({
    
    name : {
        type : String ,
        required : [true , "Name is required"],
        minlength : [2 , 'Minimum length is 2 characters']
    },
    position : {
        type : String 
    },
    status : {
        type : String,
        default : "Undecided"
    },
    status2 : {
        type : String,
        default : "Undecided"
    },
    status3 : {
        type : String,
        default : "Undecided"
    }
}, {timestamps : true}
)

const Player = mongoose.model('Player' , PlayerSchema);

module.exports = Player;