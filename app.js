const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

const db = require("./db");
const collection = "todo";

// parses json data sent to us by the user 
app.use(bodyParser.json());