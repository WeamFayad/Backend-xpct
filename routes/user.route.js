const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controllers');

router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.patch('/:id', UserController.getUser, UserController.updateUser);
router.delete('/:id', UserController.getUser, UserController.deleteUser);

module.exports = router;
