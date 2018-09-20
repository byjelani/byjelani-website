const user = require('express').Router();
// const { 
//     findUserByGoogle,
//     findUserByGoogleAndUpdate,
//     findUserById,
//     verifyAdmin
// } = require('../database/helpers');

const { ADMIN } = require('../config');

user.get('/', (req, res) => {
  const userCookie = req.user;
  const { googleID } = userCookie;
//   findUserByGoogle(googleID)
//     .then(resUser => res.status(200).json({ user: resUser }))
//     .catch(err => res.status(200).json({ err }));
});

user.put('/update', (req, res) => {
  const { body, user } = req;

    // if user is admin, user can update anyone
    // if not, user can only update itself

    // findUserByGoogleAndUpdate(user.googleID, body)
    //   .then((updatedUser) => {
    //     res.status(200).send(updatedUser);
    //   })
    //   .catch((error) => {
    //     res.status(400).send(error);
    //   });

});

user.get('/:id', (req, res) => {
  const { params } = req;
  const { id } = params;
//   findUserById(id)
//     .then(resUser => res.status(200).json({ user: resUser }))
//     .catch(err => res.status(404).json({ err }));
});

module.exports = user;