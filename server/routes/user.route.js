const express = require('express');
const router = express.Router();
const { addUser, allUsers, userCount, deleteUser } = require('../controllers/user.controller')


router.post('/add-user', addUser)
router.get('/users', allUsers)
router.get('/users/count', userCount)
router.delete('/users/:id', deleteUser)
module.exports = router;