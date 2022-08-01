const path = require("path");
const fs = require("fs/promises");
const { usersRepository } = require("../../repository");

class localStorage {
  constructor(file, user) {
    this.file = file;
    this.user = user;
    this.static = process.env.STATIC_FOLDER;
  }

  async save() {
    const destination = path.join(
      this.static,
      this.user.id
    );
    await fs.mkdir(destination, { recursive: true });
    await fs.rename(
      this.file.path,
      path.join(destination, this.file.filename)
    );
    const urlOfAvatar = path.normalize(
      path.join(this.user.id, this.file.filename)
    );

    await usersRepository.updateAvatar(
      this.user.id,
      urlOfAvatar
    );
    return urlOfAvatar;
  }
}

module.exports = localStorage;
