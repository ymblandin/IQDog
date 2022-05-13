require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

router.get("/dogs", (req, res) => {
  connection.query("SELECT * FROM dog", (error, result) => {
    if (error) {
      res.status(500).send("Can't retrieve dogs");
    } else {
      res.status(200).json(result);
    }
  });
});
// router.get("/items/:id", DogController.read);
// router.put("/items/:id", DogController.edit);
// router.post("/items", DogController.add);
// router.delete("/items/:id", DogController.delete);

module.exports = router;
