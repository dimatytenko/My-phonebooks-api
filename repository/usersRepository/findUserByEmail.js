const { User } = require("../../models/users");

const findByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = findByEmail;
