const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();
const passportConfig = require('./passport');

const express = require('express');
const app = express();

/**
 * DB Connect
 */
mongoose
  .connect(
    "mongodb://localhost/traverse_dev",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error(error.message));

/**  
 * Routes
 */
// const indexRouter = require('./routes');
const authRouter = require('./routes/auth');
const portionsRouter = require('./routes/portions');
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

/**
 * Middleware
 */
passportConfig(passport);
app.use(helmet());
app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/portions', portionsRouter);
app.use('/api/posts', postsRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});