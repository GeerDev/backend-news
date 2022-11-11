const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

require('dotenv').config()

const { dbConnection } = require('./database/config')
const PORT = process.env.PORT || 3000

dbConnection()

// app.use('/news', require('./routes/news'));

app.use('/', swaggerUI.serve,swaggerUI.setup(docs))

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))