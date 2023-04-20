import express from 'express';
import notAuth from '../middlewares/notAuth';
import isAuth from '../middlewares/isAuth';
import { Recipe } from '../../db/models';

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
indexRouter.get('/:id', isAuth, async (req, res) => {
  const oneCook = await Recipe.findByPk(req.params.id);
  const initstate = { oneCook };
  res.render('Layout', initstate);
});
export default indexRouter;
