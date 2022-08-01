const jwt = require("jsonwebtoken");

const { usersRepository } = require("../../repository");
const { HttpCode } = require("../../libs/constants");
const {
  CustomError,
} = require("../../middlewares/error-handler");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthService {
  async create(body) {
    const user = await usersRepository.findByEmail(
      body.email
    );
    if (user) {
      throw new CustomError(
        HttpCode.CONFLICT,
        "Email in use"
      );
    }
    const newUser = await usersRepository.create(body);
    return newUser;
  }

  async login({ email, password }) {
    const user = await this.getUser(email, password);
    if (!user || !user.verify) {
      throw new CustomError(
        HttpCode.UNAUTHORIZED,
        "Email or password is wrong"
      );
    }
    const token = this.generateToken(user);
    await usersRepository.updateToken(user.id, token);
    return { token, user };
  }

  async logout(id) {
    await usersRepository.updateToken(id, null);
  }

  async currentUser(id) {
    const user = await usersRepository.findById(id);
    return user;
  }

  async updateSubscription(id, subscription) {
    const user = await usersRepository.updateSubscription(
      id,
      subscription
    );
    return user;
  }

  async verificationToken(token) {
    const user = await usersRepository.verificationToken(
      token
    );
    return user;
  }

  async getUser(email, password) {
    const user = await usersRepository.findByEmail(email);
    if (!user) {
      return null;
    }
    const isValid = await user?.isValidPassword(password);
    if (!isValid) {
      return null;
    }
    return user;
  }

  generateToken(user) {
    const payload = {
      id: user.id,
    };
    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: "2h",
    });
    return token;
  }
}

module.exports = new AuthService();
