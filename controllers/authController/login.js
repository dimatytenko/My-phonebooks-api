const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");

const login = async (req, res) => {
  const { token, user } = await AuthService.login(req.body);

  return res.status(HttpCode.OK).json({
    status: "success",
    code: HttpCode.OK,
    ResponseBody: {
      token,
      user: {
        name: user.name,
        email: user.email,
        subscription: user.subscription,
        avatarURL: user.avatarURL,
        verify: user.verify,
      },
    },
  });
};

module.exports = login;
