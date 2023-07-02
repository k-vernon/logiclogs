const router = require('express').Router()
const projectsCtrl = require('../controllers/projects.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/

// Create 
router.post('/', projectsCtrl.createProject);

// Index
router.get('/', projectsCtrl.getAllProjects);

// Show 
router.get('/:id', projectsCtrl.getProjectById);


/*---------- Protected Routes ----------*/

// Update
router.put('/:id', checkAuth, projectsCtrl.updateProject);

// Delete
router.delete('/:id', checkAuth, projectsCtrl.deleteProject);

module.exports = router

