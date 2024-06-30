const express = require('express');
const router = express.Router();
const { addUser, allUsers, userCount, deleteUser, activeUsers, loanUsers, savingsUsers } = require('../controllers/user.controller')


router.post('/add-user', addUser)
router.get('/users', allUsers)
router.get('/users/count', userCount)
router.delete('/users/:id', deleteUser)
router.get('/active', activeUsers)
router.get('/loans', loanUsers)
router.get('/savings', savingsUsers)


module.exports = router;