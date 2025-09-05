const config = require('./config/index.js');
const PORT = config.port;

const express = require('express');

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server telah berhasil di jalankan di port ${PORT}`);
})