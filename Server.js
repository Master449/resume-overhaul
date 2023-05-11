const express = require('express');
const path = require('path');
const resume = express();
const port = process.argv[2] || 4000;

resume.use(bodyParser.urlencoded({ extended: true }));

resume.use(express.json());

resume.use(
  express.urlencoded({
    extended: true,
  })
);

resume.engine('html', require('ejs').renderFile);
resume.set('view engine', 'html');

resume.use(express.static(path.join(__dirname, 'public')))

//
// - - - - - - - - - - - -  Logging Related - - - - - - - - - - - - 
//
const DEFAULT = "\033[39m"
const GREEN = "\033[92m"
const RED = "\033[91m"
const ORANGE = "\033[33m"
const MAGENTA = "\033[35m"
const GREY = "\033[37m"

// Smashed into nice variables for use in console.log
const SUCCESS = GREEN + "SUCCESS: " + DEFAULT
const ERROR = RED + "ERROR: " + DEFAULT
const SENT = ORANGE + "SENT: " + DEFAULT
const API = MAGENTA + "API: " + DEFAULT
const PROD = ORANGE + "[PRODUCTION PORT]" + DEFAULT
const DEV = GREEN + "[DEVELOPMENT PORT]" + DEFAULT
const INFO = GREY + "INFO: " + DEFAULT

resume.get("/", (req, res) => {
    //send the index.html file for all requests
    console.log(SENT + "Index")
    res.sendFile(__dirname + "/views/index.html");
  });