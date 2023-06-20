import express, { Express, Request, Response } from "express";
import { json } from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import productRoutes from './routes/product';
import cors from 'cors';

const port = 8000;

const app: Express = express();
app.use(json());
app.use(cors());


// Routes
app.use('/api/', productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from express + typescript");
});

// mongodb connection
mongoose
  .connect("mongodb://0.0.0.0:27017/test-todo")
  .then((result) =>
    app.listen(port, () =>
      console.log(`connected to database and app running on port ${port}`)
    )
  )
  .catch((err) => console.log(err));