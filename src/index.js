import next from 'next';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import authRouter from './routes/AuthenticationRoute';
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 8001;

nextApp.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json());



  // Define all you backend handlers here...
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://<saf0911>:<Memphis4599>@ds135433.mlab.com:35433/workroom', {
    useMongoClient: true,
  });

  const db = mongoose.connection;



  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function () {
    console.log('we are connected!');
  });


  app.use(userRoutes);
  app.use(authRouter);
  // Handle everything that is not covered in above routes with next.js
  app.get('*', (request, response) => {
    return handle(request, response);
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('Server listening on port ' + PORT);
  });
});
