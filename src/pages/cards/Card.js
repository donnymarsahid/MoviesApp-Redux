import React from 'react';

const Card = ({ movies }) => {
  return (
    <div class="col-md-3">
      <div class="card" style={{ width: '18rem' }}>
        <img src={movies.Poster} class="card-img-top" alt={movies.Poster} />
        <div class="card-body">
          <h5 class="card-title">{movies.Title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
