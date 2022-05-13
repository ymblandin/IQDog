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

// TEST ROUTES
router.get("/tests", (req, res) => {
  connection.query("SELECT * FROM test", (error, result) => {
    if (error) {
      res.status(500).send("Can't retrieve tests");
    } else {
      res.status(200).json(result);
    }
  });
});

router.get("/tests/:id", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM test WHERE id = ?", [id], (error, result) => {
    if (error) {
      res.status(500).send("Can't retrieve tests");
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/tests/", (req, res) => {
  const { date, idBasetest, idTestset, result, idDog, time } = req.body;
  connection.query(
    "INSERT INTO test (date, id_basetest, id_testset, result, id_dog, time) VALUES (?, ?, ?, ?, ?, ?)",
    [date, idBasetest, idTestset, result, idDog, time],
    (error, queryResult) => {
      if (error) {
        console.error(error);
        res.status(500).send("Can't save dogs");
      } else {
        res.status(200).json(queryResult);
      }
    }
  );
});

router.put("/tests/:id", (req, res) => {
  const { id } = req.params;
  const { date, idBasetest, idTestset, result, idDog, time } = req.body;
  connection.query(
    "UPDATE dog SET date = ?, id_basetest = ?, id_testset = ?, result = ?, id_dog = ?, time = ? WHERE id = ?",
    [date, idBasetest, idTestset, result, idDog, time, id],
    (error, queryResult) => {
      if (error) {
        console.error(error);
        res.status(500).send("Can't update test");
      } else {
        res.status(200).json(queryResult);
      }
    }
  );
});

router.delete("/tests/:id", (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM test WHERE id = ?", [id], (error, result) => {
    if (error) {
      res.status(500).send("Can't Delete test");
    } else {
      res.status(200).json(result);
    }
  });
});

// TESTSET ROUTES
router.get("/sets", (req, res) => {
  connection.query("SELECT * FROM testset", (error, result) => {
    if (error) {
      res.status(500).send("Can't retrieve testsets");
    } else {
      res.status(200).json(result);
    }
  });
});

router.get("/sets/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM testset WHERE id = ?",
    [id],
    (error, result) => {
      if (error) {
        res.status(500).send("Can't retrieve testset");
      } else {
        res.status(200).json(result);
      }
    }
  );
});

router.post("/sets/", (req, res) => {
  const { idDog, date, result } = req.body;
  connection.query(
    "INSERT INTO testset (id_dog, date, result) VALUES (?, ?, ?)",
    [idDog, date, result],
    (error, queryResult) => {
      if (error) {
        console.error(error);
        res.status(500).send("Can't save testset");
      } else {
        res.status(200).json(queryResult);
      }
    }
  );
});

router.put("/sets/:id", (req, res) => {
  const { id } = req.params;
  const { idDog, date, result } = req.body;
  connection.query(
    "UPDATE dog SET id_dog = ?, date = ?, result = ? WHERE id = ?",
    [idDog, date, result, id],
    (error, queryResult) => {
      if (error) {
        console.error(error);
        res.status(500).send("Can't update testset");
      } else {
        res.status(200).json(queryResult);
      }
    }
  );
});

router.delete("/sets/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM testset WHERE id = ?",
    [id],
    (error, result) => {
      if (error) {
        res.status(500).send("Can't Delete testset");
      } else {
        res.status(200).json(result);
      }
    }
  );
});
module.exports = router;
