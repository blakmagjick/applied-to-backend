const mongoose = require('mongoose')
const connectionStr = process.env.MONGO_URI || 'mongodb://localhost:27017/appliedtoDB'

const mdb = mongoose.connection
mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mdb.on('connected', () => {console.log('Mongo connected')})
mdb.on('disconnected', () => {console.log('Mongo disconnected')})
mdb.on('error', (err) => {console.log('Mongo error', err)})