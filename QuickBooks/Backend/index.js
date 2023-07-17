require('dotenv').config({ path: 'config.env' });

const cors = require("cors");
const PORT = process.env.port || 8000;

const express = require('express');
const bp = require('body-parser')
var corsOptions = {
    origin: "*"
};

const app = express();

app.use(bp.json())

app.use(bp.urlencoded({ extended: true }))

app.use(cors(corsOptions));

app.use('/api', require('./routes/routes'))


  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Started at ${PORT}`)
})