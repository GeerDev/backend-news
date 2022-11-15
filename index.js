const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const cors = require('cors')

require('dotenv').config()

const { dbConnection } = require('./database/config')
const { typeError } = require("./middlewares/errors");
const PORT = process.env.PORT || 3000
app.use(cors())

dbConnection()

app.use(express.static("./public"));
app.use(express.json());

app.use('/news', require('./routes/news'));
app.use('/', swaggerUI.serve,swaggerUI.setup(docs))
app.use(typeError);

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))

module.exports = app;