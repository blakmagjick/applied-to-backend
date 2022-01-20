const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    dateApplied: Date,
    status: String,
    jobLink: String,
    notes: String
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job