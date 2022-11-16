const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const bodyParserErrorHandler = require("express-body-parser-error-handler");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  bodyParserErrorHandler({
    errorMessage: (errorMessage = (err) => {
      return err.message;
    }),
  })
);

// error handler defined
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    res.send("invalid path");
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

// routes...
require("./app/routes/index")(app, express);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 server running @ > http://localhost:${port}`);
});
