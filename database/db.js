import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-bry3zbi-shard-00-00.o4hbbxz.mongodb.net:27017,ac-bry3zbi-shard-00-01.o4hbbxz.mongodb.net:27017,ac-bry3zbi-shard-00-02.o4hbbxz.mongodb.net:27017/?ssl=true&replicaSet=atlas-11m9s1-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;