import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import indexRouter from './routes/indexRouter';
import jsxRender from './utils/jsxRender';
import authRouter from './routes/authRouter';
import resLocals from './middlewares/resLocals';
import recipeRouter from './routes/recipeRouter';

require('dotenv').config();

const PORT = 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_id', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(resLocals);

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/recipe', recipeRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
