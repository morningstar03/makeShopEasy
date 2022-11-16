const forValidation = require("./properties");
const validateToPath = require("../helpers/validateToPath");
const commonFunc = require("../helpers/commonFunc");

module.exports = {
  validation: async (req, res, next) => {
    let paths = req.path;
    let validateObject = forValidation[validateToPath[paths]]; //
    const check = commonFunc.uniqueChecker(validateObject, req.body);
    if (!check)
      return res
        .status(403)
        .json({ errorMsg: `data is not valid request failed` });
    next();
  },
};
