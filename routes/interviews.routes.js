const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.interviews.index)
router.post('/', ctrls.interviews.create)
router.put('/:id', ctrls.interviews.update)
router.delete('/:id', ctrls.interviews.destroy)

module.exports = router