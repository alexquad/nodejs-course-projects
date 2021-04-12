const express = require('express');

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(mainRoutes);
app.use(userRoutes.router);

app.use((req, res) => {
    res.render('404', {pageTitle: "Page not found"});
});

app.listen(3000);