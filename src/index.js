const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();

require('./database');

app.listen(3333, () => console.log('listen on port 3333'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(routes);

app.use('/api/image/', express.static(path.resolve(__dirname, 'images', 'uploads')))