const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
require('dotenv').config()
const app = express();

require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT | 3333, () => console.log('listen on port 3333'));

app.use('/api/image/', express.static(path.resolve(__dirname, 'images', 'uploads')))