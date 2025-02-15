// /middleware/auth.js
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id; // Save the user id from the token to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, invalid token" });
  }
};

module.exports = protect;
