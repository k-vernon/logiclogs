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



/*---------- Protected Routes ----------*/

// Update
router.put('/:id', checkAuth, ticketsCtrl.updateTicket);

// Delete
router.delete('/:id', checkAuth, ticketsCtrl.deleteTicket);


module.exports = router