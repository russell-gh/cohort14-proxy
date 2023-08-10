const express = require("express");
const app = express();

app.post("/", (req, res) => {
  res.send("Hello Github");
});

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("Server running on port: ", port);
});
