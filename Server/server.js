import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./Dataimport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import cors from "cors";
import userRoute from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json())
const port = process.env.PORT;
// API
app.use(cors());
app.use( "/api/import", ImportData);
app.use( "/api/products", productRoute);
app.use( "/api/users", userRoute);
app.use( "/api/orders", orderRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(
  5000, 
  console.log(`server running on port https://localhost:${port}...`)
);
