const express = require('express');
const {users} = require('./user');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(users);
    res.render('main', {
        pageTitle: 'Main Page'
    });
});

router.post('/', (req, res) => {
    users.push({name: req.body.name});
    res.status(201).redirect('/');
});

module.exports = router;