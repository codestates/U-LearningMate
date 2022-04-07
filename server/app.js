const express = require('express');
const indexRouter = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;
const whitelist = ['http://192.168.123.101:3000/'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(
  morgan('     :method :url :status :res[content-length] - :response-time ms')
);
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);

app.listen(port, () => console.log('서버 작동중'));
