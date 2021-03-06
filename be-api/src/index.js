import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import './services/passport';

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Routes
routes(app);

// Listen to Port
const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
