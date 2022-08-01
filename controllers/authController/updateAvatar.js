const { HttpCode } = require("../../libs/constants");
const {
  AvatarService,
  localStorage,
  // CloudStorage,
} = require("../../services/avatar");

const updateAvatar = async (req, res, next) => {
  const avatarService = new AvatarService(
    localStorage,
    req.file,
    req.user
  );

  // const avatarService = new AvatarService(
  //   CloudStorage,
  //   req.file,
  //   req.user
  // );
  const urlOfAvatar = await avatarService.update();

  res.status(HttpCode.OK).json({
    ResponseBody: {
      avatarURL: urlOfAvatar,
    },
  });
};

module.exports = updateAvatar;
