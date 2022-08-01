const registration = require("./registration");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyUser = require("./verifyUser");
const reverifyUser = require("./reverifyUser");

module.exports = {
  registration,
  login,
  logout,
  getCurrentUser,
  updateSubscription,
  updateAvatar,
  verifyUser,
  reverifyUser,
};
