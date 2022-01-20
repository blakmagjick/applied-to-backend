const express = require('express')
const routes = require('./routes')
const PORT = 3003
const app = express()

require('./config/db.connection')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Route connected')
})

app.use('/jobs', routes.applied)

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})