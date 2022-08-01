const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");

const logout = async (req, res) => {
  await AuthService.logout(req.user.id);
  return res.status(HttpCode.NO_CONTENT).json();
};

module.exports = logout;
