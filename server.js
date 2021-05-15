const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync database.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to basic Express-Sequelize-Mysql application by wwwMendex. Run seeders typing in your terminal in ./App directory: npx sequelize db:seed:all"});
});

require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



