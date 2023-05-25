const router = require('express').Router()
const projectsCtrl = require('../controllers/projects.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/

// Create 
router.post('/', projectController.createProject);

// Index
router.get('/', projectController.getAllProjects);

// Show 
router.get('/:id', projectController.getProjectById);

// Update
router.put('/:id', projectController.updateProject);

// Delete
router.delete('/:id', projectController.deleteProject);


/*---------- Protected Routes ----------*/


module.exports = router

