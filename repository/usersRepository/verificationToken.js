const { User } = require("../../models/users");

const verificationToken = async (token) => {
  const user = await User.findOne(token);

  if (user) {
    await User.findByIdAndUpdate(user._id, {
      verify: true,
      verificationToken: null,
    });
  }

  return user;
};

module.exports = verificationToken;
