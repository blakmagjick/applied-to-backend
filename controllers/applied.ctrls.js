const db = require('../models')

const index = (req, res) => {
    db.Job.find({}, (error, jobs) => {
        if (error) return res.status(400).json({error: error.message})

        return res.status(200).json(jobs)
    })
}

const create = (req, res) => {
    db.Job.create(req.body, (error, createdJob) => {
        if (error) return res.status(400).json({error: error.message})

        return res.status(201).json(createdJob)
    })
}

const update = (req, res) => {

}

const destroy = (req, res) => {

}

module.exports = {index, create, update, destroy}