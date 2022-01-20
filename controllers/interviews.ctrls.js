const db = require('../models')

const index = (req, res) => {
    db.Interview.find({}, (error, interviews) => {
        if (error) return res.status(400).json({error: error.message})

        return res.status(200).json(interviews)
    })
}

const create = (req, res) => {
    db.Interview.create(req.body, (error, createdInterview) => {
        if (error) return res.status(400).json({error: error.message})

        return res.status(201).json(createdInterview)
    })
}

const update = (req, res) => {

}

const destroy = (req, res) => {

}

module.exports = {index, create, update, destroy}