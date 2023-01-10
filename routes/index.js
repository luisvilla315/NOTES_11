const express = require('express');
const path = require("path");

// router for notes //
const notesRouter = require('./notes');
const app = express();
app.use('/notes', notesRouter);
module.exports = app;
