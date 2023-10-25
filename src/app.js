const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
const session = require('express-session');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));



app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
});

app.use(mainRoutes);

