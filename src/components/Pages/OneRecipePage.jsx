import React from 'react';

export default function OneRecipePage({ oneCook }) {
  return (
    <div className="mt-5 row rounded border border-body bg-body p-2 text-dark bg-opacity-75">
      <div className="row g-0 position-relative">
        <div className="col-md-6 mb-md-0 p-md-0">
          <img src={oneCook.image} alt="Обложка книги" style={{ width: '70%' }} />
        </div>
        <div className="col-md-6 p-4 ps-md-1">
          <h6 className="list-group">Блюдо: </h6>
          <h3 className="mt-0">{oneCook.title}</h3>
          <table>
            <thead>
              <tr>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr className="list-group-item list-group-item-action">
                <td className="fw-bolder">Ингредиенты: </td>
                <td>{oneCook.ingredients}</td>
              </tr>
              <tr className="list-group-item list-group-item-action">
                <td className="fw-bolder">Время готовки: </td>
                <td>{oneCook.time}</td>
              </tr>
            </tbody>
          </table>
          <p className="fw-lighter text-start mt-3">
            Способ готовки:
          </p>
          <p className="fw-lighter text-start">{oneCook.body}</p>
        </div>
      </div>
    </div>
  );
}
