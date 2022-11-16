const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

module.exports = {
  // get store data by email | store_id | location_id
  getStoreData: async (req, res, next) => {
    try {
      const { email, mobile, store_id, location_id } = req.body;
      let data;
      if (email) {
        data = await prisma.stores.findUnique({ where: { email } });
      }
      if (mobile) {
        data = await prisma.stores.findUnique({ where: { email } });
      }
      if (location_id) {
        data = await prisma.stores.findUnique({ where: { location_id } });
      }
      if (store_id) {
        data = await prisma.stores.findUnique({ where: { store_id } });
      }
      res.status(200).send(data);
    } catch (error) {
      res
        .status(500)
        .json({ title: "internal server error", err: error.message });
    }
  },

  // registering the store if not already
  register: async (req, res, next) => {
    try {
      const { email } = req.body;
      const passKey = req.body.password;
      const salt = await bcrypt.genSalt(8);
      req.body.password = await bcrypt.hash(passKey, salt);
      const isStore = await prisma.stores.findUnique({ where: { email } });
      if (isStore)
        return res.status(422).json({
          msg: `store with this ${email} is already registered`,
        });

      const addData = await prisma.stores.insert(req.body);
      res.status(200).json({ msg: `store data recorded successfully` });
    } catch (error) {
      res
        .status(500)
        .json({ title: "internal server error", err: error.message });
    }
  },

  // update store data
  updateStoreDetails: async (req, res, next) => {},
};
