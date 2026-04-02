const express = require('express')
const path = require('path')
require('dotenv').config()

console.log(process.env)

const app = express()
const port = process.env.PORT || 8080 
const hostName = process.env.HOST_NAME

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!ww')
})

app.get('/abc',  (req, res) => {
  res.send('Hello World!abc')
})
app.get('/bbc',  (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`)
})