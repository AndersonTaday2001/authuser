import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";


const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));


//routes
app.get("/API/DEFAULT", (req, res) => {
  res.send("Hello World!");
});


export default app;

