// routes/projects.js
const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} = require('../controller/projectController');

// GET all projects    /api/projects
router.get('/', getProjects);

// GET single project  /api/projects/:id
router.get('/:id', getProject);

// POST new project    /api/projects
router.post('/', createProject);

// PUT update project  /api/projects/:id
router.put('/:id', updateProject);

// DELETE project      /api/projects/:id
router.delete('/:id', deleteProject);

module.exports = router;
