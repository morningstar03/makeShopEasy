const jwt = require("../middlewares/auth.jwt");
const validator = require("../middlewares/validateUserData");
const storeOperations = require("./store.routes");

module.exports = (app, express) => {
  // store register section
  const register = express.Router();
  app.use("/", register);
  storeOperations.registerStore(register, jwt, validator.validation);

  // get store data by location_id | store_id | email | phone --> section
  const getData = express.Router();
  app.use("/", getData);
  storeOperations.registerStore(getData, jwt);
  //   const login = express.Router();
  //   app.use("/", login);
  //   require("./login")(login, jwt, validator.validation);
};
