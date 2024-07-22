const express = require('express');
const app=express();
const connectDB = require('./connectDB');
const routes = require('./router')


app.use(express.json())
app.use('/contacts',routes)

connectDB();


const port = 5000 ;

app.listen(port,console.log('app runnig at 5000'))

