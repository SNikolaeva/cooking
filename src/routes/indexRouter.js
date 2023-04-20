import express from 'express';
import notAuth from '../middlewares/notAuth';
import { Recipe } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const allRecipe = await Recipe.findAll()
  const initState = {allRecipe}
  res.render('Layout', initState);
});
indexRouter.get('/signup', notAuth, (req, res) => {
  res.render('Layout');
});

indexRouter.get('/login', notAuth, (req, res) => {
  res.render('Layout');
});


export default indexRouter;
