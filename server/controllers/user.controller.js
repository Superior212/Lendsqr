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

module.exports = { addUser, allUsers, userCount, deleteUser }