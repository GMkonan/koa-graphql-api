import mongoose from "mongoose";

(async () => {
    const database = async () => {
        mongoose.connect('mongodb://localhost:27017/koatest');
    }
    database().catch(err => console.log(err));
    
    console.log("connected")
})();