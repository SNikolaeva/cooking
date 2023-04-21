import express from 'express';
import isAuth from '../middlewares/isAuth';
import { Recipe, Likelist, User } from '../../db/models';

const likeRouter = express.Router();

likeRouter.get('/', isAuth, async (req, res) => {
  const favorite = await Likelist.findAll({
    where: { user_id: req.session.user.id },
    include: Recipe,
    User,
  });
  const like = favorite.map((el) => el.Recipe);
  const initState = { like };
  res.render('Layout', initState);
});
likeRouter.post('/', isAuth, async (req, res) => {
  const onerecipe = req.body.recipe_id;
  const { user } = req.session;
  // await Likelist.findOrCreate({ where: { recipe_id: onerecipe, user_id: user.id } });
  const liked = await Likelist.findOrCreate({
    where: { recipe_id: onerecipe },
    defaults: { user_id: user.id },
  });
  if (!liked) return res.status(401).json({ message: 'Рецепт уже в избранном!' });
  return res.sendStatus(200);
});

likeRouter.delete('/:id', isAuth, async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    // const onerecipe = req.body.recipe_id;
    // const { user } = req.session;
    await Likelist.destroy({ where: { recipe_id: id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});
export default likeRouter;
