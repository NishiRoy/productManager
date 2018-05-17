var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var productSchema=new mongoose.Schema({
    title:{ type:String, required:[true,'Title is required'],minlength:[4,'Title is too short(min:4)']},
    price:{type:Number, required:[true,'Price is required']},
    image:{type:String}
},{timestamps:true});
    
mongoose.model('Product',productSchema);
