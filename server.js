const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const PORT = 3003
const app = express()

require('./config/db.connection')

app.use(express.json())

const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))


app.get('/', (req, res) => {
    res.send('Route connected')
})

app.use('/conferences', routes.conferences)
app.use('/interviews', routes.interviews)
app.use('/jobs', routes.jobs)

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})