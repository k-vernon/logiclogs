const router = require('express').Router()
const ticketsCtrl = require('../controllers/tickets.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/



module.exports = router