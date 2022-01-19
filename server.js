const express = require('express')
const PORT = 3003
const app = express()

require('./config/db.connection')

app.get('/', (req, res) => {
    res.send('Route connected')
})

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})