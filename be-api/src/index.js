import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Routes
// simple route
app.get('/', (req, res) => {
  res.json({message: 'You made it to the home page 😊🎊'})
})

// Listen to Port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
