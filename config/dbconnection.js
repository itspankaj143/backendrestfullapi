const mongoose = require("mongoose");
const url =
  "mongodb+srv://pankaj1234kashyap:7W11P9ZTHyq7Bhn3@cluster0.au8p4.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0";

const connectingdb = async () => {
  try {
    const db = await mongoose.connect(url);
    console.log(
      `Connection successfully to Mongodb databse ${db.connection.host}`
    );
  } catch (e) {
    console.log(e);
  }
};
module.exports = connectingdb;
