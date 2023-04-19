import express from 'express';
import notAuth from '../middlewares/notAuth';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  res.render('Layout', {});
});
indexRouter.get('/signup', notAuth, (req, res) => {
  res.render('Layout');
});

indexRouter.get('/login', notAuth, (req, res) => {
  res.render('Layout');
});
export default indexRouter;
