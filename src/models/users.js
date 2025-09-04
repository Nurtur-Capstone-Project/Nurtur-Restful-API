const dbPool = require('../config/database.js');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (name, email, password, address)
                        VALUES (?, ?, ?, ?)`;
    
    return dbPool.execute(SQLQuery, [body.name, body.email, body.password, body.address]);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `  UPDATE users
                        SET name=?, email=?, password=?, address=?
                        WHERE id=?`;
    
    return dbPool.execute(SQLQuery, [body.name, body.email, body.password, body.address, idUser]);
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id=?`;

    return dbPool.execute(SQLQuery, [idUser]);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}
