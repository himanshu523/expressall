const express = require('express');

const sequelize = require('./util/database');

const app = express();
const path = require('path');


const bodyParser = require('body-parser');

app.use(bodyParser.json({extended:false}));

const homeRoutes = require('./routes/homeroutes');

const errorController =require('./controllers/error');

app.use(homeRoutes);

app.use(errorController.get404);





sequelize.sync().then(()=>{
    app.listen(3000);
})
.catch((err)=>console.log(err));

