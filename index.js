const express = require('express')
const basicAuth = require('basic-auth-connect')
const dotenv = require('dotenv')

dotenv.config();

const app = express()

const USERNAME = process.env.USERNAME || 'user';
const PASSWORD = process.env.PASSWORD || 'pass';

app.use(basicAuth(USERNAME, PASSWORD))

app.use(express.static('site'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App listening on port ${port}.`)
})
