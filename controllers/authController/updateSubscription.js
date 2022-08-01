const AuthService = require("../../services/auth");
const { HttpCode } = require("../../libs/constants");

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const id = req.user.id;
  const user = await AuthService.updateSubscription(
    id,
    subscription
  );

  if (!user) {
    return res.status(HttpCode.NOT_FOUND).json({
      status: "error",
      code: HttpCode.NOT_FOUND,
      ResponseBody: {
        message: "User not found",
      },
    });
  } else {
    return res.json({
      status: "success",
      code: HttpCode.OK,
      ResponseBody: { user },
    });
  }
};

module.exports = updateSubscription;
