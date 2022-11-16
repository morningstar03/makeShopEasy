// const Joi = require('joi');

module.exports = {
  register: {
    required: {
      name: {
        type: "string",
      },
      email: {
        type: "email",
      },
      mobile: {
        type: "string",
      },
      address: {
        type: "string",
      },
      password: {
        type: "string",
      },
      inWork: {
        type: "boolean",
      },
      opening_time: {
        type: "string",
      },
      closing_time: {
        type: "string",
      },
      createdBy: {
        type: "string",
      },
      createdAt: {
        type: "date",
      },
      updatedBy: {
        type: "string",
      },
      updatedAt: {
        type: "date",
      },
    },
    additional: {
      rating: {
        type: "float",
      },
      working_days: {
        type: "array",
      },
      device_access: {
        type: "array",
      },
      description: {
        type: "string",
      },
    },
  },
};
