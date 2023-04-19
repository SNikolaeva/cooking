import axios from 'axios';
import React from 'react';

export default function SignupPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    try {
      const response = await axios.post('/auth/signup', formData);
      if (response.status === 200) { window.location = '/'; }
    } catch (error) {
      console.log('Ошибка регистрации!');
    }
  };
  return (
    <div className="text-center">

      <div className="form-signin w-25 m-auto mt-5">
        <form className="rounded border border-body bg-body p-2 text-dark bg-opacity-75" onSubmit={submitHandler}>

          <h1 className="h3 mb-3 mt-3 fw-normal">Регистрация:</h1>

          <div className="form-floating mt-3">
            <input type="text" name="name" className="form-control" id="nameinput" autoFocus />
            <label htmlFor="floatingInput">Имя</label>
            <div id="nameHelp" className="form-text text-center">
              Имя может быть не полным
            </div>
          </div>
          <div className="form-floating mt-3">
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" />
            <label htmlFor="floatingInput">Ваша почта от аккаунта</label>
            <div id="emailHelp" className="form-text text-center">
              Почта должна содержать @
            </div>
          </div>
          <div className="form-floating mt-3">
            <input type="text" name="avatar" className="form-control" id="imginput" />
            <label htmlFor="floatingInput">Аватар</label>
            <div id="avatarHelp" className="form-text text-center">
              Ссылка на вашу фотографию
            </div>
          </div>
          <div className="form-floating mt-3">
            <input type="password" name="password" className="form-control" id="floatingPassword" />
            <label htmlFor="floatingPassword">Пароль</label>
            <div id="passwordHelp" className="form-text text-center">
              Постарайтесь придумать сложный пароль.
            </div>
          </div>
          <button className="w-50 mt-5 btn btn-lg btn-outline-dark" type="submit">Регистрация</button>
          <p className="mt-3 mb-3 text-muted">
            &copy;
            {new Date().getFullYear()}
          </p>
        </form>
      </div>
    </div>
  );
}
