const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my server.' });
});

const db = require('./models');

db.sequelize.sync();

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
