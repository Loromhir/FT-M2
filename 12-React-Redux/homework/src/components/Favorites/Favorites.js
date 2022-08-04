import React, { Component } from "react";
 import { connect } from "react-redux";
 import { Link } from 'react-router-dom';
import './Favorites.css';
import {deleteMovieFovorite} from '../../actions/index'

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map(movie=>{
              <div key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <span>{movie.title}</span>  
                  </Link>
                  <button onClick={()=>this.props.deleteMovieFovorite(movie.id)}>
                    X</button>
              </div>

          })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites
  }
}
function mapDispatchToProps(dispatch) {
  return{
    deleteMovieFovorite: movieID=> dispatch(deleteMovieFovorite(movieID))
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (ConnectedList);
