const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const port = 8000;
const MONGO_URI =
  "mongodb+srv://thalakanti4r:venkat123@atlascluster.dukjchm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

mongoose.connect(MONGO_URI, {});
mongoose.connection.on("connected", () => {
  try {
    console.log("Database Connected Succefully");
  } catch (err) {
    console.log("Something happend "+err);
  }
});
// const todoRoutes=require('./routes/todoRoutes')
// app.use('/api/todo',todoRoutes)

app.listen(port, () => {
  console.log("Server is connected to database with " + port);
});
