const User = require('../models/user.model');
const users = require('../users')


const addUser = async (req, res) => {
    try {


        for (const userData of users) {

            const newUser = new User(userData);

            await newUser.save();
        }

        res.status(201).json({ message: 'All users created successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error creating users", error: error.message });
    }
};

const allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
}


const userCount = async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        res.json({ count: userCount });
    } catch (error) {
        res.status(500).json({ message: 'Error counting users', error: error.message });
    }
}


const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
}

const activeUsers = async (req, res) => {
    try {
        const activeUsers = await User.find({ status: 'Active' });
        const count = await User.countDocuments({ status: 'Active' });
        res.status(200).json({ count, users: activeUsers });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching active users', error: error.message });
    }
}



const loanUsers = async (req, res) => {
    try {
        const usersWithLoans = await User.find({ 'education_and_employment.loan_repayment': { $gt: 0 } });
        const count = await User.countDocuments({ 'education_and_employment.loan_repayment': { $gt: 0 } });
        res.status(200).json({ count, users: usersWithLoans });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users with loans', error: error.message });
    }
}

const savingsUsers = async (req, res) => {
    try {
        const usersWithSavings = await User.find({ has_savings: true });
        const count = await User.countDocuments({ has_savings: true });
        res.status(200).json({ count, users: usersWithSavings });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users with savings', error: error.message });
    }
}


module.exports = { addUser, allUsers, userCount, deleteUser, activeUsers, loanUsers, savingsUsers }