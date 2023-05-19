const { Ticket } = require('../models');


const createTicket = async (req, res) => {
  try {
    const { title, description, projectId, userId } = req.body;

    const ticket = await Ticket.create({
      title,
      description,
      projectId,
      userId,
    });

    res.status(201).json({ ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create ticket' });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();

    res.status(200).json({ tickets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
};



module.exports = {
  createTicket,
  getAllTickets,

}