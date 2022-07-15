const mongoose = require('mongoose');

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasdevs.8rxwfkg.mongodb.net/database?retryWrites=true&w=majority`,
    error => {
      if (error) {
        console.log('An error has occurred', error);
      }
      console.log('Successfully connected to Database');
    }
  );
};

module.exports = connectToDatabase;
