import express from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./Dataimport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";


dotenv.config()
connectDatabase()
const app = express();
const port = process.env.PORT;

// API 
app.use("/api/import",ImportData)
app.use("/api/products",productRoute)
app.use(notFound)
app.use(errorHandler)


app.listen(5000, console.log(`server running on port ${port}...`));
