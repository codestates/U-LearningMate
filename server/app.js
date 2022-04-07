const express = require('express');
const indexRouter = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;


/*
const whitelist = ['http://192.168.123.101:3000',
 		   'http://192.168.0.168:3000',
		   'http://localhost:3000',
   'http://ulearningmate-client.s3-website.ap-northeast-2.amazonaws.com']

/*

/*
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
};
*/

/*
const corsList = {
  origin: [
           //'http://192.168.123.101:3000',
           //'http://192.168.0.168:3000',
           'http://localhost:3000',
   'http://ulearningmate-client.s3-website.ap-northeast-2.amazonaws.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
};
*/

/*
  const corsAll = {
  origin: '*', 
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
};
*/

app.use(
  morgan('     :method :url :status :res[content-length] - :response-time ms')
);

//app.use(cors(corsList));
//app.use(cors(corsOptions));
//app.use(cors(corsAll));
//app.use(cors(corsOptions));

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);

app.listen(port, () => console.log('서버 작동중', port));

