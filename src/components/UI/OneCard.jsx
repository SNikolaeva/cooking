import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function OneCard({
  id, onerecipe, image, title, ingredients, body, time, recipeLike, setLikeState, user,
}) {
  const url = useLocation();
  console.log('onerecipe.id,-----------------',onerecipe.id)
  const likeHeandler = async () => {
    await axios.post('/like', { recipe_id: onerecipe.id, user_id: user?.id });
  };
  const deletHeandler = async () => {
    await axios.delete(`/like/${id}`);
    setLikeState((prev) => prev.filter((el) => el.id !== onerecipe.id));
  };

  return (
    <div className="card shadow-sm">
      <a href={`/${id}`}>
        <img
          className="bd-placeholder-img card-img-top"
          style={{ width: '100%', height: '225px' }}
          src={image}
          alt="Placeholder: Thumbnail"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
        />
      </a>
      <div className="card-body">
        <h5>{title}</h5>
        <p className="card-text">
          {body.slice(0, 100)}
          ...
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            {url.pathname === '/like' ? (
              <button onClick={deletHeandler} type="button" className="w-20 mb-3 btn btn-lg btn-outline-dark ">💔</button>
            ) : (<button type="button" className="btn btn-sm btn-outline-secondary" onClick={likeHeandler}>💖</button>)}
          </div>
          <small className="text-muted">
            Кол-во ингредиентов:
            {ingredients.split(',').length}
          </small>
          <small className="text-muted">
            Время готовки:
            {' '}
            {time}
          </small>
        </div>
      </div>
    </div>
  );
}
