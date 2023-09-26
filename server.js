import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import studentRouter from "./routes/student.js";
import staffRouter from "./routes/staff.js";
import userRouter from "./routes/user.js";
import customerRouter from "./routes/customer.js";
import productRouter from "./routes/product.js";
import EJSLayouts from "express-ejs-layouts";

// environment var
dotenv.config();
const PORT = process.env.PORT || 6060;

// express init
const app = express();

// use express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ejs setup
app.set("view engine", "ejs");
app.use(EJSLayouts);

// static folder
app.use(express.static("public"));

//apps routers
app.use(studentRouter);
app.use(staffRouter);
app.use(userRouter);
app.use(customerRouter);
app.use(productRouter);

// server listen
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgGreen.black);
});
