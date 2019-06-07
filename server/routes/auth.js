// server/routes/auth.js
const express = require("express");

const { createUser, getUser } = require("../db/users");
const token = require("../auth/token");
const verifyJwt = require("express-jwt");

const router = express.Router();

router.use(userError);

router.post("/register", register, token.issue);

router.get(
  "/user", 
  verifyJwt({ secret: process.env.JWT_SECRET }), 
  user
  );

function register(req, res, next) {
  const { username, password } = req.body;
  createUser({ username, password })
    .then(id => {
      res.locals.userId = id;
      next();
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

function user(req, res) {
  console.log(res.user);
  getUser(req.user.id)
    .then(({ username }) => {
      res.json({
        ok: true,
        username
      });
    })
    .catch(() => {
      res.status(500).json({
        ok: false,
        message: "An error ocurred while retrieving your user profile."
      });
    });
}

function userError(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ ok: false, message: "Access denied." });
  }
}

module.exports = router;
