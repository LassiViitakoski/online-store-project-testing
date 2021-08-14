import express from 'express';
import cors from 'cors';
import { AppRouter } from './AppRouter';
import './controllers/TestController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});
