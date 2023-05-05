import JWT from "jsonwebtoken";

//Practed Routes token base

export const requireSignIn = async (req, res, next) => {
  const decode = JWT.verify;
};
