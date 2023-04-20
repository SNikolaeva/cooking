import React from 'react';
import OneCard from '../UI/OneCard';

export default function LikePage({ like, user }) {
  const [likeState, setLikeState] = useState(like || []);
  return (
    <div className="row mt-5 mx-auto rounded">

      {likeState?.map((el) => (
        <div className="col-4" key={el.id}>
          <OneCard recipeLike={el} setLikeState={setLikeState} user={user} />
        </div>
      ))}
    </div>
  );
}
