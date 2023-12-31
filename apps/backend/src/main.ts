import mongoose from 'mongoose';
import express, { Response, NextFunction } from 'express';
import cookieSession from 'cookie-session';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

const MONGO_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://ekqian:jV6oKsZWBFNOWo9N@prod-aws.ttqlwry.mongodb.net';
mongoose.connect(MONGO_URI);

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

// eslint-disable-next-line no-console
app.listen(port, () => console.log('Port connected.'));

app.use(bodyParser.json());

app.use(
  cookieSession({
    name: 'session',
    secret: 'prod-aws',
    secure: false,
  }),
);

app.use((err, req, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send(err);
});
