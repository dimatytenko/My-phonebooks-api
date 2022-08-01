const { randomUUID } = require("crypto");

const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");
const sendEmail = require("../../sendgrid/helpers");

const registration = async (req, res) => {
  const verificationToken = randomUUID();
  const user = await AuthService.create({
    ...req.body,
    verificationToken,
  });

  sendEmail(req.body.email, verificationToken);

  return res.status(HttpCode.CREATED).json({
    status: "success",
    code: HttpCode.CREATED,
    ResponseBody: {
      verify: user.verify,
      name: user.name,
      email: user.email,
      subscription: user.subscription,
      avatarURL: user.avatarURL,
    },
  });
};

module.exports = registration;
