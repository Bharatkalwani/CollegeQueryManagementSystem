const mongoose = require("mongoose");
// const keys = require("./keys");

const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://CMS:bk9828064545@cluster0.itloa.mongodb.net/CMS-Project?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then((data) => {
        console.log("MongoDB Connected.!");
      });
  } catch {
    console.log("MongoDB not Connected...");
    process.exit(1);
  }
};
module.exports = { connectDB };
