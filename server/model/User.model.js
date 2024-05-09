import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username Already Exist"]
    },
    password : {
        type: String,
        required: [true, "Please provide a Password"],
        unique: true,
    },
    email : {
        type: String,
        required: [true, "Please provide unique Email"],
        unique: true
    },
    firstName : {
        type: String
    },
    LastName : {
        type: String
    },
    mobile : {
        type: Number
    },
    address : {
        type: String
    },
    profile : {
        type: String //Here profile does not mean profile but it is naming for profile picture for maintaining the coherence with client side
    }
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);