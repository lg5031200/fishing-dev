const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dockerUri = `mongodb://root:fishdev123@localhost:27017`;
const mongoAtlasUri =
  'mongodb+srv://admin:polly123@cluster0.whih7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri || dockerUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(' Mongoose is connected')
  );
} catch (e) {
  console.log('could not connect');
}

const dbConnection = mongoose.connection;
dbConnection.on('error', (err) => console.log(`Connection error ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));
