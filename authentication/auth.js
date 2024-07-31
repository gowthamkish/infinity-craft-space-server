const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// Generate random secret key

const secretKey = crypto.randomBytes(32).toString("hex");

function generateToken(user) {
  const paylaod = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(paylaod, secretKey, { expiresIn: "1h" });
}

module.exports = { generateToken };
