import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling CORS POLICY
app.use(cors());

app.get('/', (request,response) => {
    console.log(request);
    return response.status(200).send('WELCOME TO MERN STACK');
});

app.use('/books', bookRoute);

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });