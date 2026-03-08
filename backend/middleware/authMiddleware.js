import jwt from "jsonwebtoken"

export const authMiddleware = (req,res,next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send("Token is not present")
    }

    let jwtToken;

    if (token.startsWith("Bearer ")) {
      jwtToken = token.split(" ")[1];
    } else {
      return res.status(401).send("Token does not contain bearer")
    }

    const verifyToken = jwt.verify(jwtToken, process.env.JWT_SECRET);

    if (verifyToken.id) {
      req.userId = verifyToken.id;
      next();
    }
  } catch (error) {
    console.error("some error occurred in authorization", error);
    return res.status(500).send("Internal Error")
  }
}