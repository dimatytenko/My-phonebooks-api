const { User } = require("../../models/users");

const updateToken = async (id, token) => {
  return await User.findByIdAndUpdate(id, { token });
};

module.exports = updateToken;
