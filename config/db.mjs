import mongoose from "mongoose";

const connection = mongoose.connect('mongodb://0.0.0.0/users').then(() => {
  console.log("database connected");
});

export default connection;


