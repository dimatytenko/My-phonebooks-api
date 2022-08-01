const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");

const verifyUser = async (req, res) => {
  const verificationToken = req.params;
  const user = await AuthService.verificationToken(
    verificationToken
  );
  if (!user) {
    return res.status(HttpCode.NOT_FOUND).json({
      Status: "Not Found",
      Code: HttpCode.NOT_FOUND,
      ResponseBody: {
        message: "User not found",
      },
    });
  } else {
    return res.status(HttpCode.OK).json({
      Status: "OK",
      Code: HttpCode.OK,
      ResponseBody: {
        message: "Verification successful",
      },
    });
  }
};

module.exports = verifyUser;
