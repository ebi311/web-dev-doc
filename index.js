const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()

const USERNAME = 'user'
const PASSWORD = 'abc'

app.use(basicAuth(USERNAME, PASSWORD))

app.use(express.static('site'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App listening on port ${port}.`)
})
