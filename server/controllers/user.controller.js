const db = require('../models');

const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send({ message: 'Public Content.' });
};

exports.userBoard = (req, res) => {
  User.findByPk(req.userId).then((user) => {
    res.status(200).send(user);
  });
};

exports.adminBoard = (req, res) => {
  res.status(200).send({ message: 'Admin Content.' });
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send({ message: 'Moderator Content.' });
};
