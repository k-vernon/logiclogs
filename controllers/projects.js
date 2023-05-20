const { Project } = require('../models');

const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({ project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create project' });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();

    res.status(200).json({ projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};


module.exports = {
  createProject,
  getAllProjects,
  

}