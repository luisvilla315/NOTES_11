const express = require('express');
const path = require('path');
const api = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3001;
// Middleware //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);
//  routes //
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});
// Listen //
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
