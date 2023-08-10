import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import  {UserRouter}  from './routes/users.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/",UserRouter);

mongoose.connect("mongodb+srv://devaharishm:Pwunil9g51GBfvBo@database.p7ulplt.mongodb.net/Database?retryWrites=true&w=majority");

app.listen(3001, () => {
    console.log("Server is started.");
})

