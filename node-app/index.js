const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    print: "hello world"
  })
});

app.listen(5001, () => console.log("Server running on 5001"));
