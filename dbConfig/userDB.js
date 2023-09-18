require('dotenv').config();
const mongoose = require('mongoose');
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const url = `mongodb+srv://${username}:${password}@cluster0.slt4wi9.mongodb.net/`

mongoose.connect(url).then(()=>{
    console.log('Database Connected')
}).catch(()=>{
    console.log('Database disconnected...!!!')
})