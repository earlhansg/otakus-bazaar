import express, { Express, Request, Response } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';

const port = 8000;

const app: Express = express();

app.get("/",  (req: Request, res: Response) => {
    res.send("Hello from express + typescript");
});

// mongodb connection
mongoose.connect('mongodb://0.0.0.0:27017/test-todo')
.then(result => app.listen(port, () => console.log(`connected to database and app running on port ${port}`)))
.catch(err => console.log(err))