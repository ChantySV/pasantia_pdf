const express = require('express')
const router = express.Router()
const controller = require('../controllers/documentos.controller')

router.get('/', controller.test)
router.get('/documentos', controller.get )

module.exports = router