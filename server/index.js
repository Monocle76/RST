const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();
const appPort = "3500";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "My money don't jiggle jiggle 💵" });
})

app.listen(appPort, () => { console.log("App running at port "+appPort) })


module.handler = serverless(app);
