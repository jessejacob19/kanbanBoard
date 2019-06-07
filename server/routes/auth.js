// server/routes/auth.js
const express = require("express");
const { createUser } = require("../db/users");

const router = express.Router();

router.post("/register", register);

function register(req, res) {
  const { username, password } = req.body;
  console.log(1, res.locals);
  createUser({ username, password })
    .then(id => {
      res.status(201).json({ ok: true });
      res.locals.userId = id;
      console.log(res.locals);
    })
    .catch(({ message }) => {
      // This is vulnerable to changing databases. SQLite happens to use
      // this message, but Postgres doesn't.
      if (message.includes("UNIQUE constraint failed: users.username")) {
        return res.status(400).json({
          ok: false,
          message: "Username already exists."
        });
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why."
      });
    });
}

module.exports = router;
