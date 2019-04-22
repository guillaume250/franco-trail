const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Franco Trail is runnig on port ${PORT}`));
