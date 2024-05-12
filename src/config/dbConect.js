import mongoose, { mongo } from "mongoose"; 

async function connectOnDatabase() {
    mongoose.connect(process.env.DB_CONECTION_STRING);

    return mongoose.connection;
};

export default connectOnDatabase;

