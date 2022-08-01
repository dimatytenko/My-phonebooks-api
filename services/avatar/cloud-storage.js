const cloudinary = require("cloudinary").v2;
const { promisify } = require("util");
const { unlink } = require("fs/promises");
const { usersRepository } = require("../../repository");
const {
  FOLDER_CLOUD_AVATAR,
} = require("../../libs/constants");

cloudinary.config({
  cloud_name: "dimatytenko-cloud",
  api_key: "461892518879632",
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
  secure: true,
});

class CloudStorage {
  constructor(file, user) {
    this.file = file;
    this.user = user;
    this.uploadToCloud = promisify(
      cloudinary.uploader.upload
    );
  }

  async save() {
    const responce = await this.uploadToCloud(
      this.file.path,
      {
        public_id: this.user.cloudId,
        folder: FOLDER_CLOUD_AVATAR,
      }
    );

    const { public_id: cloudId, secure_url: urlOfAvatar } =
      responce;

    await usersRepository.updateAvatar(
      this.user.id,
      urlOfAvatar,
      cloudId.replace(`${FOLDER_CLOUD_AVATAR}/`, "")
    );

    try {
      await unlink(this.file.path);
    } catch (error) {
      console.error(error);
    }

    return urlOfAvatar;
  }
}

module.exports = CloudStorage;
