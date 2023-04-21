import express from 'express';
import isAuth from '../middlewares/isAuth';
import { Recipe, Likelist } from '../../db/models';

const likeRouter = express.Router();

likeRouter.get('/', isAuth, async (req, res) => {
  console.log('req.session.user.id========', req.session.user.id);
  const favorite = await Likelist.findAll({
    where: { user_id: req.session.user.id },
    include: Recipe,
  });
  const like = favorite.map((el) => el.Recipe);
  const initState = { like };
  res.render('Layout', initState);
});

likeRouter.post('/like', isAuth, async (req, res) => {

});
likeRouter.delete('/like', isAuth, async (req, res) => {

});
export default likeRouter;
