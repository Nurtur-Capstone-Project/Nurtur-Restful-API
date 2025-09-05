const UsersModels = require('../models/users.js');

const getAllUsers = async (req, res) => {
    try {
        const [rows] = await UsersModels.getAllUsers();
        res.json({
            message: 'GET all users berhasil',
            data: rows
        })
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        res.status(500).json({
            message: 'Server Error',
            serverMessage: 'An unexpected error occurred on the server.',
        })
    }
}

const createNewUser = async (req, res) => {
    const { body } = req;
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang tidak lengkap',
            data: null,
        });
    }

    try {
        await UsersModels.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new user berhasil',
            data: body
        })
    } catch (error) {
        console.error('Error in createNewUser:', error);
        res.status(500).json({
            message: 'Server Error',
            serverMessage: 'An unexpected error occurred on the server.',
        })
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const { body } = req;
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang tidak lengkap',
            data: null,
        });
    }

    try {
        await UsersModels.updateUser(body, idUser);    
        res.json({
            message: 'UPDATE user berhasil',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        console.error('Error in updateUser:', error);
        res.status(500).json({
            message: 'Server Error',
            serverMessage: 'An unexpected error occurred on the server.',
        })
    }
}

const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        await UsersModels.deleteUser(idUser);
        res.json({
            message: 'Delete user berhasil',
            data: null
        })
    } catch (error) {
        console.error('Error in deleteUser:', error);
        res.status(500).json({
            message: 'Server error',
            serverMessage: 'An unexpected error occurred on the server.',
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}