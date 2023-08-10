import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    emailId : {type : String, required : true, unique : true},
    address : {type : String, required : true},
    mobileNumber : {type : Number, required : true},
    event : {type : [], required : true}
});

export const userModel = mongoose.model("users",userSchema);

