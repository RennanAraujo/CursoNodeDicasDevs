//require('./modules/http');

const dotenv = require('dotenv');
const connectToDatabase = require('./src/connect.js');

dotenv.config();

connectToDatabase();

require('./modules/express');
