// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');
const config = require('../config/auth.config');

module.exports = (sequelize, Sequelize) => {
  const RefreshToken = sequelize.define('refreshToken', {
    token: {
      type: Sequelize.STRING
    },
    expiryDate: {
      type: Sequelize.DATE
    }
  });

  RefreshToken.createToken = async function (user) {
    const expiredAt = new Date();

    expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);

    const token2 = uuidv4();

    const refreshToken = await this.create({
      token: token2,
      userId: user.id,
      expiryDate: expiredAt.getTime()
    });

    return refreshToken.token;
  };

  RefreshToken.verifyExpiration = (token) =>
    token.expiryDate.getTime() < new Date().getTime();

  return RefreshToken;
};
