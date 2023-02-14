const db = require('../models');

const { ROLES } = db;
const User = db.user;

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then((user) => {
    if (user) {
      res.status(400).send({
        error: 'Failed! Username is already in use!'
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
      // eslint-disable-next-line no-shadow
    }).then((user) => {
      if (user) {
        res.status(400).send({
          error: 'Failed! Email is already in use!'
        });
        return;
      }

      next();
    });
  });
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role does not exist = ${req.body.roles[i]}`
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;
