import axios from 'axios';
import React from 'react';

export default function Navbar({ user }) {
  const logoutHandler = async () => {
    const response = await axios.get('/auth/logout');
    if (response.status === 200) {
      window.location = '/';
    }
  };
  return (
    <nav className="navbar navbar-expand-md rounded border border-body bg-body p-1 py-1 text-dark bg-opacity-75">
      <div className="container-fluid mx-auto" style={{ maxWidth: '1200px' }}>
        <a href="/">
          <img src="../../logoza.ru.png" alt="Лого" height="40px" />
        </a>
        <p className="me-auto pl-5 my-2 navbar-nav-scroll">{user?.id ? `Привет, ${user.name}` : 'Привет, гость! Выберите способ авторизации!'}</p>
      </div>
      <div className="collapse navbar-collapse">
        <div>
          <ul className="navbar-nav me-auto my-2 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Главная</a>
            </li>
          </ul>
        </div>
        {!user?.id
        && (
        <div>
          <ul className="navbar-nav me-auto my-2 navbar-nav-scroll">
            <li className="nav-item dropdown">
              <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Авторизация
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/login">Вход</a></li>
                <li><a className="dropdown-item" href="/signup">Регистрация</a></li>
              </ul>
            </li>
          </ul>
        </div>
        )}
        {user?.id
        && (
        <div>
          <ul className="navbar-nav my-2 navbar-nav-scroll">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src='https://www.pngkey.com/png/detail/804-8049996_male-avatar-job.png' alt="avat" width="30" height="30" />
              </a>
              <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/recipe">Добавить рецепт</a></li>
                <li><a className="dropdown-item" href="/#">Избранное</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li className="dropdown-item"><button type="button" className="nav-link" onClick={logoutHandler}>Выход</button></li>
              </ul>
            </li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
}
