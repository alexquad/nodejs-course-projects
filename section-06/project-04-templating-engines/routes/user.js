const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res) => {
    res.render('users', {
        pageTitle: 'User Page',
        users: users
    });
});


exports.router = router;
exports.users = users;