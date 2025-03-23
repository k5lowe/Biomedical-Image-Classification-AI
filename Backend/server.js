require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "yourdatabase"
});

db.connect(err => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Connected to database");
});

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";
  
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(401).json({ error: "User not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user.id }, "your_jwt_secret", { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
