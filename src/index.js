const express = require('express')
const morgan = require('morgan')
const route = require('./routes')
const db = require('./config/db')

// connect to db
db.connect();
const app = express()

//nodemon: lắng nghe thay đổi trong sourcecode
// morgan: log ra request
// app.use(morgan('combined'))

route(app);

app.listen(3000, () => console.log('app run port 3000'))