const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.applied.index)
router.post('/', ctrls.applied.create)
router.put('/:id', ctrls.applied.update)
router.delete('/:id', ctrls.applied.destroy)

module.exports = router