const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = `mongodb://root:fishdev123@localhost:27017`;

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () =>
  console.log(`Connected to mongodb success!`)
);
