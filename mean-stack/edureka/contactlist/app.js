// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// connect to mongodb
mongoose.connect('mongodb://david:david@ds155091.mlab.com:55091/contacts')

// on connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
  if (err) {
    console.log(err);
  }
});

// port no
const port = 3000;

//adding middleware - cors
app.use(cors());

//bodyParser
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

// testing Server
app.get('/', (req, res) => {
  res.send('homepage');
});

app.listen(port, () => {
  console.log('Server started at port:' + port);
});
