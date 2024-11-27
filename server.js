let express = require('express'),
   path = require('path'),
//    mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser');
   let mongoose = require('mongoose');
   require('dotenv').config();

// Connecting with mongo db
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
   console.log('Database sucessfully connected')
},
error => {
   console.log('Database could not connected: ' + error)
}
)

// Setting up port with express js
const SalonRoute = require('./controllers/salon.controller.js')
const ServicesRoute = require('./controllers/services.controller.js')
const SubServicesRoute = require('./controllers/subServices.controller.js')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors()); 
app.use('/api', SalonRoute)
app.use('/api', ServicesRoute)
app.use('/api', SubServicesRoute)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})


// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});