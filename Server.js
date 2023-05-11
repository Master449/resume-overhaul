const express = require('express');
const path = require('path');

const resume = express();

resume.use(bodyParser.urlencoded({ extended: true }));

resume.use(express.json());

resume.use(
  express.urlencoded({
    extended: true,
  })
);

resume.engine('html', require('ejs').renderFile);
resume.set('view engine', 'html');