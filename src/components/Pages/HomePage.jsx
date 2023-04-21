import React, { useState } from 'react';
import OneCard from '../UI/OneCard';

export default function HomePage({ recipeState, user }) {
  const [sortState, setSortState] = useState('default');

  recipeState?.sort((a, b) => {
    if (sortState === 'ascIngredients') {
      return a.ingredients.split(',').length - b.ingredients.split(',').length;
    } if (sortState === 'descIngredients') {
      return b.ingredients.split(',').length - a.ingredients.split(',').length;
    } if (sortState === 'ascTime') {
      return parseInt(a.time) - parseInt(b.time);
    } if (sortState === 'descTime') {
      return parseInt(b.time) - parseInt(a.time);
    }
    return 0;
  });
  return (
    <div className="m-3">
      {/* <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto rounded border border-body bg-body p-2 text-dark bg-opacity-75">
            <h1 className="fw-light">Каталог рецептов</h1>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" />
              <button className="btn btn-outline-success" type="submit">Поиск</button>
            </form>
          </div>
        </div>
      </section> */}

      <div className="album py-5  rounded border border-body bg-body p-2 text-dark bg-opacity-75">
        <select
          className="form-select w-25 m-auto mt-1 align-items-start"
          value={sortState}
          onChange={(e) => setSortState(e.target.value)}
        >
          <option value="default">Фильтр по умолчанию</option>
          <option value="descIngredients">
            По количеству ингредиентов (по убыванию)
          </option>
          <option value="ascIngredients">
            По количеству ингредиентов (по возрастанию)
          </option>
          <option value="descTime">По времени приготовления (по убыванию)</option>
          <option value="ascTime">
            По времени приготовления (по возрастанию)
          </option>
        </select>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1">
            {recipeState?.map((el) => (
              <div className="col" key={el.id}>
                <OneCard onerecipe={el} user={user} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
