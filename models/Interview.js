const mongoose = require('mongoose')

const interviewSchema = new mongoose.Schema({
    interviewerName: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    interviewDate: Date,
    notes: String
})

const Interview = mongoose.model('Interview', interviewSchema)

module.exports = Interview