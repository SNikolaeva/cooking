import axios from 'axios';
import React from 'react';

export default function RecipePage({ submitHandler }) {
  return (
    <div className="text-center">

      <div className="form-signin w-25 m-auto mt-5">
        <form className="rounded border border-body bg-body p-2 text-dark bg-opacity-75" onSubmit={submitHandler}>

          <h1 className="h3 mb-3 mt-3 fw-normal">Добавить рецепт:</h1>

          <div className="form-floating mt-3">
            <input type="text" name="title" className="form-control" id="nameinput" autoFocus />
            <label htmlFor="floatingInput">Название блюда</label>
          </div>
          <div className="form-floating mt-3">
            <input type="text" name="image" className="form-control" id="nameinput" autoFocus />
            <label htmlFor="floatingInput">Картинка блюда</label>
          </div>
          <div className="form-floating mt-3">
            <input type="text" name="ingredients" className="form-control h-100" id="inputIngredients" />
            <label htmlFor="floatingInput">Ингредиенты (через запятую)</label>
          </div>
          <div className="form-floating mt-3">
            <input type="text" name="time" className="form-control" id="timeInput" />
            <label htmlFor="floatingInput">Время приготовления</label>
          </div>
          <div className="form-floating mt-3">
            <input type="text" name="body" className="form-control" id="bodyInput" rows="12" cols="12" />
            <label htmlFor="floatingInput">Текстовое описание</label>
          </div>
          <button className="w-50 mt-5 btn btn-lg btn-outline-dark" type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
}
