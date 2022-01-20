const mongoose = require('mongoose')

const conferenceSchema = new mongoose.Schema({
    conferenceName: String,
    conferenceBeginningDate: Date,
    conferenceEndingData: Date,
    registered: Boolean,
    conferenceLink: String,
    notes: String
})

const Conference = mongoose.model('Conference', conferenceSchema)

module.exports = Conference