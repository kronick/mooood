import express from "express";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

//app.use(bodyParser.urlencoded({ extended: false }));
app.post(
  "/incoming",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    const message = req.body.Body;
    console.log("Incoming!", message);
    res.send("OK");
  }
);
