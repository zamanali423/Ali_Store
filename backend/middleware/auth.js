const jwt = require("jsonwebtoken");
const User = require("../database/userDatabase/userData");

const authMiddleware = async (req, res, next) => {
  // Check if the Authorization header is present
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized: Token not provided" });
  }

  try {
    // Verify the token
    const isToken = token.replace("Bearer ", "").trim();
    const decoded = jwt.verify(isToken, process.env.SECRET_KEY);
    const userData = await User.findOne({ email: decoded.email }); // Replace
    
    if (!userData) {
      return res.status(401).json({ msg: "Unauthorized: User not found" });
    }

    req.user = userData;
    req.token = token;
    req._id = userData._id;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: "Unauthorized: Token not valid" });
  }
};

module.exports = authMiddleware;
