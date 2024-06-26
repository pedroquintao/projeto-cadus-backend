import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String, required: true}, 
}, { versionKey: false });

const user = mongoose.model("users", userSchema);

export default user;