// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create express application
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');