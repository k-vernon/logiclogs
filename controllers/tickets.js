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

const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;

    const ticket = await Ticket.findByPk(id);

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.status(200).json({ ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch ticket' });
  }
};

const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;

    const ticket = await Ticket.findByPk(id);

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    await ticket.update({
      title,
      description,
      status,
      priority,
    });

    res.status(200).json({ ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update ticket' });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  
}