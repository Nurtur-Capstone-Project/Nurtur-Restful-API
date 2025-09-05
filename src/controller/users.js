const UsersModels = require('../models/users.js');
const { sendSuccess, sendError } = require('../helpers/responseHelper.js');

const getAllUsers = async (req, res) => {
    try {
        const [rows] = await UsersModels.getAllUsers();
        sendSuccess(res, 'GET all users berhasil', rows);
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        sendError(res, 500, 'An unexpected error occurred on the server.');
    }
}

const createNewUser = async (req, res) => {
    const { body } = req;
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return sendError(res, 400, 'Anda mengirimkan data yang tidak lengkap');
    }

    try {
        await UsersModels.createNewUser(body);
        sendSuccess(res, 'CREATE new user berhasil', body, 201);
    } catch (error) {
        console.error('Error in createNewUser:', error);
        sendError(res, 500, 'An unexpected error occurred on the server.');
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const { body } = req;
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return sendError(res, 400, 'Anda mengirimkan data yang tidak lengkap');
    }

    try {
        await UsersModels.updateUser(body, idUser);    
        sendSuccess(res, 'UPDATE user berhasil', { id: idUser, ...body });
    } catch (error) {
        console.error('Error in updateUser:', error);
        sendError(res, 500, 'An unexpected error occurred on the server.');
    }
}

const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        await UsersModels.deleteUser(idUser);
        sendSuccess(res, 'Delete user berhasil', null);
    } catch (error) {
        console.error('Error in deleteUser:', error);
        sendError(res, 500, 'An unexpected error occurred on the server.');
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}