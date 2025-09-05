const UsersModels = require('../models/users.js');
const { sendSuccess, sendError } = require('../helpers/responseHelper.js');

const getAllUsers = async (req, res) => {
    try {
        const [rows] = await UsersModels.getAllUsers();
    }
}

const createNewUser = async (req, res) => {
    const { body } = req;
    const { name, email, password } = body;

    if (!name || !email || !password) {
    }

    try {
        await UsersModels.createNewUser(body);
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const { body } = req;
    const { name, email, password } = body;

    if (!name || !email || !password) {
    }

    try {
        await UsersModels.updateUser(body, idUser);    
        sendSuccess(res, 'UPDATE user berhasil', { id: idUser, ...body });
    } catch (error) {
        console.error('Error in updateUser:', error)
    }
}

const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        await UsersModels.deleteUser(idUser);
        sendSuccess(res, 'Delete user berhasil', null);
    } catch (error) {
        console.error('Error in deleteUser:', error);
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}