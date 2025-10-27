const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Routes = require('./routes/route');

const app = express();
const PORT = process.env.PORT || 1000;


app.use(cors());


app.use(express.json());

app.use('/api', Routes);


app.get('/', (req, res) => {
  res.send("I am running");
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
