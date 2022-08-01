const { User } = require("../../models/users");

const updateAvatar = async (id, avatar, cloudId = null) => {
  const user = await User.findByIdAndUpdate(
    id,
    {
      avatarURL: avatar,
      cloudId: cloudId,
    },
    { new: true }
  );
  return user;
};

module.exports = updateAvatar;
