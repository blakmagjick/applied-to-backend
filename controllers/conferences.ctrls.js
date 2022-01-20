const db = require('../models')

const index = (req, res) => {
    db.Conference.find({}, (error, sonferences) => {
        if (error) return res.status(400).json({error: error.message})

        return res.status(200).json(conferences)
    })
}

const create = (req, res) => {
    db.Conference.create(req.body, (error, createdConference) => {
        if (error) return res.status(400).json({error: error.message})

        return res.status(201).json(createdConference)
    })
}

const update = (req, res) => {

}

const destroy = (req, res) => {

}

module.exports = {index, create, update, destroy}