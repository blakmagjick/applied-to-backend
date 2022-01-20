const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.jobs.index)
router.post('/', ctrls.jobs.create)
router.put('/:id', ctrls.jobs.update)
router.delete('/:id', ctrls.jobs.destroy)

module.exports = router