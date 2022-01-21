const express = require('express');
const depController = require('../controllers/depController')
const DepsRouter = express.Router();



DepsRouter
        .route('/')
        .get(async (req, res)=> depController.getDep(req, res))
        .post(async (req, res)=> depController.createDep(req, res))
        .put(async (req, res)=> depController.updateDep(req, res))
        
DepsRouter
        .route('/:id')
        .delete(async (req, res)=> depController.deleteDep(req, res))
// EditDepRouter
//       .route('/edit/:id')
//       .put(async (req, res)=> depController.updateDep(req, res))





module.exports = DepsRouter;