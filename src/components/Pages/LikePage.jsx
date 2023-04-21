import React, { useState } from 'react';
import OneCard from '../UI/OneCard';

export default function LikePage({ recipeState, user }) {
  const [likeState, setLikeState] = useState(recipeState || []);
  return (
    <div className="row mt-5 mx-auto rounded">

      {likeState?.map((el) => (
        <div className="col-4" key={el.id}>
          <OneCard onerecipe={el} setLikeState={setLikeState} user={user} />
        </div>
      ))}
    </div>
  );
}
