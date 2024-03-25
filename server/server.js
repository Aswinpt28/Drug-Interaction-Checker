const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRouter");
const userRoute = require("./routes/userRouter");
const AddDrugsRoute = require("./routes/AddDrugsRouter");
const getPatientRoutes = require("./routes/getPatientRoutes");
const pillsRouter = require("./routes/pillRouter");
const doctorRoutes = require("./routes/doctorRoutes");
const bookRouter = require("./routes/bookRouter");
const medicineRoutes = require("./routes/medicineRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));

// Use the routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/admin", AddDrugsRoute);
app.use("/api/admin", getPatientRoutes);
app.use("/api/pills", pillsRouter);
app.use("/api/doctors", doctorRoutes);
app.use("/api/book", bookRouter);
app.use("/api", medicineRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
