export const ageCheck = (req, res, next) => {
  console.log("Age check middleware");
  if (req.body.age > 21) {
    next();
  } else {
    res.status(400).json({ message: "Your age is not allowed" });
  }
};
