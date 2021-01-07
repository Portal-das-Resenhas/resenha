const express = require('express');

const routes = express.Router();

routes.post('/users',  (req, res) => {
    return res.json({ idade: req.query.idade});
});

module.exports = routes;
