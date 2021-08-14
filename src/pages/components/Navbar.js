import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies, valueSearch } from '../../redux/action/Actions';

const Navbar = () => {
  const URL_SEARCH = 'http://www.omdbapi.com/?s=';
  const API_KEY = '&apikey=9d54a30f';
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const handlerSearch = (e) => {
    e.preventDefault();
    axios(`${URL_SEARCH}${search}${API_KEY}`).then((res) => {
      dispatch(valueSearch('results search : ' + search));
      dispatch(getMovies(res.data.Search));
    });
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            Movie App
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Homepage
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
            <form class="d-flex" onSubmit={handlerSearch}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
