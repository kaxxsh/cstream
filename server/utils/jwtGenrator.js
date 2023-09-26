import jwt from "jsonwebtoken";
import {} from "dotenv/config.js";

const jwtGenrator = ({ payload }) => {
  const token = jwt.sign({ payload }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

const jwtVerify = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

export { jwtGenrator, jwtVerify };
