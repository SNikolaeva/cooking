import express from 'express';
import bcrypt from 'bcrypt';
import { Op } from 'sequelize';
import { User } from '../../db/models';

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  const {
    name, email, avatar, password,
  } = req.body;
  if (!(name && email && avatar && password))  res.sendStatus(400);
  const hashpass = await bcrypt.hash(password, 10);
  const [foundUser, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, avatar, hashpass },
  });
  if (!created) return res.status(401).json({ message: 'Пользователь уже существует' });
  req.session.user = foundUser;
  return res.sendStatus(200);
});

authRouter.post('/login', async (req, res) => {
  const { emailOrUsername, password } = req.body;
  const foundUser = await User.findOne({
    where: {
      [Op.or]: [
        { email: emailOrUsername },
        { name: emailOrUsername },
      ],
    },
  });
  if (!foundUser) return res.status(401).json({ message: 'Нет такого пользователя' });
  if (await bcrypt.compare(password, foundUser.hashpass)) {
    req.session.user = foundUser;
    return res.sendStatus(200);
  }
  return res.status(401).json({ message: 'Неверный пароль' });
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('students_sid');
  res.sendStatus(200);
});
export default authRouter;
