import startService from './controllers/driver.js';
import mongoose from 'mongoose';
import express from 'express';
const app = express();

const CONNECTION_URL = "mongodb+srv://mukesh_k:mg829285@cluster0.oe9kq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 6000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology : true, autoIndex: true})
.then(()=> app.listen(PORT,()=>console.log('SERVER RUNNING ON PORT : ' + PORT)))
.catch((error)=> console.log(error.message));

startService();