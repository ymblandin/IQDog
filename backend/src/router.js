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

router.get("/dogs/:id", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM dog WHERE id = ?", [id], (error, result) => {
    if (error) {
      res.status(500).send("Can't retrieve dogs");
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/dogs/", (req, res) => {
  const { name, birth, creation } = req.body;
  connection.query(
    "INSERT INTO dog (name, date_of_birth, date_of_creation) VALUES (?, ?, ?)",
    [name, birth, creation],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send("Can't save dogs");
      } else {
        res.status(200).json(result);
      }
    }
  );
});

router.put("/dogs/:id", (req, res) => {
  const { id } = req.params;
  const { name, birth, creation } = req.body;
  connection.query(
    "UPDATE dog SET name = ?, date_of_birth = ?, date_of_creation = ? WHERE id = ?",
    [name, birth, creation, id],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send("Can't save dogs");
      } else {
        res.status(200).json(result);
      }
    }
  );
});

router.delete("/dogs/:id", (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM dog WHERE id = ?", [id], (error, result) => {
    if (error) {
      res.status(500).send("Can't Delete dogs");
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
