const login = require('express').Router();
const { OAuth2Client } = require('google-auth-library');
const { passport } = require('../passport');
const { GOOGLE_KEYS } = require('../config');

const { GOOGLE_CLIENT_ID } = GOOGLE_KEYS;

login.post('/', (req, res) => {
  const { token } = req.body;
  const client = new OAuth2Client(GOOGLE_CLIENT_ID);
//   async function verify() {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: GOOGLE_CLIENT_ID
//     });
//     const payload = ticket.getPayload();
//     const userid = payload.sub;
//   }
//   verify().catch((err) => {
//     console.log(err);
//   });

//   const {
//     email, given_name, family_name, picture
//   } = payload;

//   Users.findOne({
//     where: {
//       email, googleID: userid
//     }
//   }).then((user) => {
//     if (user) {
//       res.status(200).send(user);
//       res.end();
//     } else {
//       console.log(email, given_name, family_name, picture, userid);
//       // redirect to signup
//     }
//   });
});

// login.get('/google/redirect', passport.authenticate('google', {
//   successRedirect: '/',
//   failureRedirect: '/login'
// }));

login.get('/', (req, res) => res.send({ user: req.user || null }));

// login.get('/google', passport.authenticate('google', {
//   scope: ['profile']
// }));

module.exports = login;