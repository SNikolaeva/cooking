import React from 'react';
import OneCard from '../UI/OneCard';

export default function HomePage({ recipeState }) {
  return (
    <div className="m-1">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto rounded border border-body bg-body p-2 text-dark bg-opacity-75">
            <h1 className="fw-light">Каталог рецептов</h1>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" />
              <button className="btn btn-outline-success" type="submit">Поиск</button>
            </form>
          </div>
        </div>
      </section>

      <div className="album py-5 mb-1 rounded border border-body bg-body p-2 text-dark bg-opacity-75">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {recipeState?.map((el) => (
              <div className="col" key={el.id}>
                <OneCard id={el.id} onerecipe={el} image={el.image} title={el.title} ingredients={el.ingredients} body={el.body} time={el.time} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
