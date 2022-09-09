import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-bry3zbi-shard-00-00.o4hbbxz.mongodb.net:27017,ac-bry3zbi-shard-00-01.o4hbbxz.mongodb.net:27017,ac-bry3zbi-shard-00-02.o4hbbxz.mongodb.net:27017/?ssl=true&replicaSet=atlas-11m9s1-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose
    .connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
    });

};


export default Connection;