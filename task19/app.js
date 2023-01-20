
const express = require("express");
const app = express();


const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: false }));


const homeRoutes = require("./routes/homeroutes");
app.use(homeRoutes);


const path = require("path");
app.use(express.static(path.join(__dirname, "public")));


//var cors = require("cors");
//app.use(cors());


const errorController = require("./controllers/error");
app.use(errorController.get404);


const sequelize = require("./util/database");
sequelize
  .sync()
  .then((result) => {
  
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
