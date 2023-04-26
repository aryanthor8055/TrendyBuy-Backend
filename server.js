const express = require("express");

//rest Object
const app = express();

//rest api

app.get("/", (req, res) => {
  res.send({
    message: "welcome to e-commerce app",
  });
});

//PORT

const PORT = 8080;

//RUN LISTEN

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
