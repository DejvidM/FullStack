const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'is required'],
        minlength : [1 , 'minimum length is 1 character']
    },
    price : {
        type : Number,
        required : [true, 'is required']
    },
    description : {
        type : String,
        required : [true, 'is required'],
        minlength : [1 , 'minimum length is 10 character']
    }
},
    {timestamps : true}
)  

const Product = mongoose.model('Product' , ProductSchema);
module.exports = Product