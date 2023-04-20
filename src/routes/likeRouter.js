import express from 'express';
import isAuth from '../middlewares/isAuth';
import { Recipe, Likelist } from '../../db/models';

const likeRouter = express.Router();

likeRouter.get('/', isAuth, async (req, res) => {
  const favorite = await Likelist.findAll({
    where: { user_id: req.session.user.id },
    include: Recipe,
  });
  console.log('favorite=========', favorite);
  const like = favorite.map((el) => el.Recipe);
  const initState = { like };
  res.render('Layout', initState);
});

export default likeRouter;
