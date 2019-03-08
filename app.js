const express = require('express')
const app = express()

const hostname = '0.0.0.0'    // allows access from remote computers
const port = 3002

app.get('/', (req, res) =>{
  res.send('Welcome home!')
})

app.get('/hello', (req, res) =>{
  res.send('<title>Hello</title><h3>Hello World!</h3>')
})

app.get('/big',  (req, res) =>{
  res.send('<title>Big</title><h1>Hello World!</h1>')
})

app.get('/cool/',  (req, res) =>{
  res.send('Add "/yourName" to the end of the url to access this page.')
})

app.get('/cool/:person',  (req, res) =>{
  res.send('Hey, ' + req.params.person + ', you are a cool person!')
})

app.get('/wow',  (req, res) =>{
  res.send('<title>WOW</title><h1>WOW</h1><p>You found the WOW page. You will have a good day.</p>')
})

app.get('/bad',  (req, res) =>{
  res.send('<title>BAD</title><h1>STOP</h1><p>YOU HAVE VIOLATED THE LAW</p>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

