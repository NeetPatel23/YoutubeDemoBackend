import { DB_Name } from "../constants.js";
import mongoose from "mongoose";

const connectionDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)

        console.log("MongoDB connected successfully !!");

        console.log("MongoDB connection details: ", {
            host: connectionInstance.connection.host,
            port: connectionInstance.connection.port,
            dbName: connectionInstance.connection.name,
        });
    } catch (error) {
        console.log("ERROR: Conection error", error.message);
        process.exit(1);
    }
}

export default connectionDB;