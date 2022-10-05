const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');


const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>
console.log("Connected to the database"))
.catch((err)=>console.log(err));

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on ${process.env.PORT}...`);
})