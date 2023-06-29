const router = require('express').Router()
const ticketsCtrl = require('../controllers/tickets.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/

// Create 
router.post('/', ticketsCtrl.createTicket);

// Index
router.get('/', ticketsCtrl.getAllTickets);

// Show 
router.get('/:id', ticketsCtrl.getTicketById);

// Update
router.put('/:id', ticketsCtrl.updateTicket);

// Delete
router.delete('/:id', ticketsCtrl.deleteTicket);


/*---------- Protected Routes ----------*/



module.exports = router