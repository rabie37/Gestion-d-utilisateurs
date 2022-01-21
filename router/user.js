const express = require('express');
const userController = require('../controllers/userController')
const UsersRouter = express.Router();



UsersRouter
        .route('/')
        .get(async (req, res)=> userController.getUser(req, res))
        .post(async (req, res)=> userController.createUser(req, res))
        .put(async (req, res)=> userController.updateUser(req, res))
        
UsersRouter
        .route('/:id')
        .delete(async (req, res)=> userController.deleteUser(req, res))



module.exports = UsersRouter;