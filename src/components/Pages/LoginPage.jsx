import React, { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const [errState, setErrState] = useState(null);
  const [inputGroup, setInputGroup] = useState({ emailOrUsername: '', password: '' });
  const changeHandler = (e) => setInputGroup((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', inputGroup);
      if (response.status === 200) { window.location = '/'; }
      return;
    } catch (error) {
      setErrState(error.response.data);
      console.log('Вы не смогли войти!');
    }
  };

  return (
    <div className="text-center" onSubmit={submitHandler}>

      <div className="form-signin w-25 m-auto mt-5">
        <form className="rounded border border-body bg-body p-2 text-dark bg-opacity-75">
          <h1 className="h3 mb-3 mt-5 fw-normal">Авторизация</h1>

          <div className="form-floating mt-5">
            <input value={inputGroup.emailOrUsername} onChange={changeHandler} type="text" name="emailOrUsername" className="form-control" id="floatingInput" autoFocus />
            <label htmlFor="floatingInput">Почта или имя</label>
          </div>
          <div className="form-floating">
            <input value={inputGroup.password} onChange={changeHandler} name="password" type="password" className={inputGroup.password.length <= 3 && inputGroup.password.length > 0 ? 'form-control is-invalid' : 'form-control'} id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Пароль</label>
          </div>
          <button className="w-50 mt-5 btn btn-lg btn-outline-dark" type="submit">Войти</button>
          {errState && <div style={{ color: 'red' }}>{errState.message}</div>}
          <p className="mt-5 mb-3 text-muted">
            &copy;
            {new Date().getFullYear()}
          </p>
        </form>
      </div>
    </div>
  );
}
