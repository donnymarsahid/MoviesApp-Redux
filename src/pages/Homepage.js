import axios from 'axios';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getMovies } from '../redux/action/Actions';
import Card from './cards/Card';

const Homepage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?s=avengers&apikey=9d54a30f').then((res) => {
      dispatch(getMovies(res.data.Search));
    });
  }, [dispatch]);

  const cardMovies = props.movies.map((movies) => {
    return <Card movies={movies} />;
  });

  return (
    <>
      <div class="container">
        <h3>{props.value}</h3>
        <div class="row">{cardMovies}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    value: state.value,
  };
};

export default connect(mapStateToProps)(Homepage);
