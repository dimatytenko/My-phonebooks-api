const { User } = require("../../models/users");

const findById = async (id) => {
  return await User.findById(id);
};

module.exports = findById;
