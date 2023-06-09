import express from 'express';
import isAuth from '../middlewares/isAuth';
import { Recipe } from '../../db/models';

const recipeRouter = express.Router();

recipeRouter.get('/', isAuth, (req, res) => {
  res.render('Layout', {});
});

recipeRouter.post('/', isAuth, async (req, res) => {
  try {
    const {
      title, image, ingredients, time, body,
    } = req.body;
    const newRecipe = await Recipe.create({
      title, image, ingredients, time, body,
    });
    res.json(newRecipe);
  } catch (error) {
    console.log('Ошибка добавления рецета');
  }
});

recipeRouter.get('/:id', isAuth, async (req, res) => {
  const oneCook = await Recipe.findByPk(req.params.id);
  const initstate = { oneCook };
  res.render('Layout', initstate);
});

export default recipeRouter;
