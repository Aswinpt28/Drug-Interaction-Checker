const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const authRouter = require("./routes/authRouter");
const userRoutes = require("./routes/userRouter");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/user", userRoutes);

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://aswinpt:shield@cluster0.uns4puq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

process.on("SIGINT", () => {
  db.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});
