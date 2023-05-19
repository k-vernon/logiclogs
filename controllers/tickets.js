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

module.exports = {
  createTicket
}