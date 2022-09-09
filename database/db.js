import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();



const Connection = async (username, password) => {
    const URL = `mongodb+srv://sachin:${password}@cluster0.o4hbbxz.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;