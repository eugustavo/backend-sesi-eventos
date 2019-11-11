const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://sesieventos:sesiti123@sesieventos-ggddh.mongodb.net/eventos?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);
