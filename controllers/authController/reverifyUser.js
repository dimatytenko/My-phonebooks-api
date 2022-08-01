const AuthService = require("../../services/auth");
const { User } = require("../../models/users");
const { HttpCode } = require("../../libs/constants");
const sendEmail = require("../../sendgrid/helpers");

const reverifyUser = async (req, res) => {
  const user = await User.findOne(req.body);

  if (user.verify) {
    return res.status(HttpCode.BAD_REQUEST).json({
      Status: "Bad Request",
      Code: HttpCode.BAD_REQUEST,
      ResponseBody: {
        message: "Verification has already been passed",
      },
    });
  }
  sendEmail(user.email, user.verificationToken);

  return res.status(HttpCode.OK).json({
    Status: "Ok",
    Code: HttpCode.OK,
    ResponseBody: {
      message: "Verification email sent",
    },
  });
};

module.exports = reverifyUser;
