const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.conferences.index)
router.post('/', ctrls.conferences.create)
router.put('/:id', ctrls.conferences.update)
router.delete('/:id', ctrls.conferences.destroy)

module.exports = router