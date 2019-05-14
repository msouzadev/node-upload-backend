require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const path = require('path');
const app =  express();
const cors = require('cors');
/**
 * Database setup
 */
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})

app.use(cors())
app.use(express.json());//permitr receber  json nas requisiçoes
app.use(express.urlencoded({extended:true}));//permitir o servidor lidar com url encodadas
app.use(morgan('dev'))
app.use('/files',express.static(path.resolve(__dirname,'..','tmp','uploads')))
app.use(require('./routes'));

app.listen(3000)

