const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const port = process.env.PORT || 5000;

const userRouter = require('./ROUTER/userRouter');
const adminRouter = require('./ROUTER/adminRouter');

app.use(express.json());
https://github.com/abdulvahidkp/userManagementReact.git
//mongodb connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.mongodb);  

app.use('/',userRouter)
app.use('/admin',adminRouter);

app.listen(port,()=>console.log(`Server is running on PORT: ${port}`));   