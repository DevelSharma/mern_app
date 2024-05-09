import mongoose from "mongoose";
// import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
  const uri = "mongodb://127.0.0.1:27017/mern_app";

  const connectDB = async () => {
    try {
      const connect = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log("mongo db connected!!!");
      console.log(`Hostname: ${connect.connection.host}`);
    } catch (err) {
      console.log(err);
    }
  };
  connectDB();

  // const mongod = await MongoMemoryServer.create(); // this function returns a promise that resolves to a MongoMemoryServer instance. mongod variable holds this instance.
  // const getUri = mongod.getUri(); // retrieves the connection URI for this server using the getUri() method provided by the MongoMemoryServer instance.

  // mongoose.set('strictQuery', true)
  // const db = await mongoose.connect(getUri);   //connects Mongoose to the MongoDB server by calling mongoose.connect() and passing the URI of the in-memory server (getUri)
  // console.log("Database Connected");
  // return db;

}

export default connect;
