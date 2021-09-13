import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';

interface State {
  movies: Movie[];
}

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
  };

  addMov = (newMov: any) => {
    if (newMov) {
      this.setState(state => {
        return ({
          movies: [...state.movies, newMov],
        });
      });
    } else {
      this.setState(state => {
        return ({
          movies: [...state.movies],
        });
      });
    }
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          <NewMovie addMov={this.addMov} movies={movies} />
        </div>
      </div>
    );
  }
}