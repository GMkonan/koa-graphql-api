import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: String,
    name: String,
}, {
    timestamps: true
})

export default model('User', UserSchema);