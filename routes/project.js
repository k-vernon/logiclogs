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

// Update
router.put('/:id', projectsCtrl.updateProject);

// Delete
router.delete('/:id', projectsCtrl.deleteProject);


/*---------- Protected Routes ----------*/


module.exports = router

