require('dotenv').config();

module.exports = {
  secret: process.env.SECRET,
  jwtExpiration: 3660,
  jwtRefreshExpiration: 86400
};
