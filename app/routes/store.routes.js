const registerStore = require("../controller/store.controllers");

module.exports = {
  // register.get("/register/:userId", jwt, registerStore.getUserRegisterData);

  // register store data
  register: async (register, jwt, validation) => {
    register.post("/register", jwt, validation, registerStore.register);
  },

  // update store data
  updateStore: async (register, jwt, validatio) => {
    register.post(
      "/getStore/:id",
      jwt,
      validatio,
      registerStore.updateStoreDetails
    );
  },
};
