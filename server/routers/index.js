const signupRouter = require('./signup');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const userRouter = require('./user');

module.exports = (app) => {
  app.use('api/signup', signupRouter);
  app.use('api/login', loginRouter);
  app.use('api/logout', logoutRouter);
  app.use('api/user', userRouter);
};