import React from 'react';
import axios from 'axios';

export default function OneBookPage({}) {
  return (
    <div className="mt-5 row rounded border border-body bg-body p-2 text-dark bg-opacity-75">
      <div className="row g-0 bg-body-secondary position-relative">
        <div className="col-md-6 mb-md-0 p-md-0">
          <img src={oneBook.image} alt="Обложка книги" style={{ width: '50%' }} />
        </div>
        <div className="col-md-6 p-4 ps-md-1">
          <h6 className="list-group">Книга: </h6>
          <h3 className="mt-0">{oneBook.title}</h3>
          <table>
            <thead>
              <tr>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr className="list-group-item list-group-item-action">
                <td className="fw-bolder">Автор: </td>
                <td></td>
              </tr>
              <tr className="list-group-item list-group-item-action">
                <td className="fw-bolder">Жанр: </td>
                <td>{oneBook.genre}</td>
              </tr>
              <tr className="list-group-item list-group-item-action">
                <td className="fw-bolder">Ингридиенты </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p className="fw-lighter text-start mt-3">
            О чем:
          </p>
          <p className="fw-lighter text-start">Описание</p>
        </div>
      </div>
    </div>
  );
}
