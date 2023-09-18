require('dotenv').config();
require('./dbConfig/userDB');
const PORT = process.env.PORT;
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.use(fileUpload({
    useTempFiles: true
}));

app.listen(PORT, ()=>{
    console.log(`This server is running on Port: ${PORT}`)
});
