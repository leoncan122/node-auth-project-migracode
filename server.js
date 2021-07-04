const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const user = require('./routes/user')



// initializing express application
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// parse requests of content-type - application/json
app.use(express.json());

app.use((req, res, next) => { 
  console.log(`REQUEST RECEIVED!`); 
  console.log(` URL: ${req.path}`); 
  console.log(` PARAMS: ${JSON.stringify(req.params)}`); 
  console.log(` BODY: ${JSON.stringify(req.body, null, 2)}`); 
  next(); 
});


const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));  // enable CORS


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MigraCode Auth application." });
});

//esto es un middleware dentro de otro middleware
app.use('/user', user)


// set port, listen for requests
const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${server.address().port}.`);
});



