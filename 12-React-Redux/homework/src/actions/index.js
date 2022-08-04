export function addMovieFavorite(movie) {
    return { type: 'ADD_MOVIE_FAVORITE',
     payload: movie };
  }
   
  export function getMovies(title) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=dff8d895&s=${title}` )
        .then(response => response.json())
        .then(movies => {dispatch({ type: "GET_MOVIES", payload: movies })});
    };
  }
  
  export function getMovieDetail(id){
    return function(dispatch){
      return fetch(`http://www.omdbapi.com/?apikey=dff8d895&i=${id}` )
      .then (response=> response.json())
      .then( detail => {dispatch({type: 'GET_MOVIE_DETAIL', payload: detail})})
    }
  } 

  export function deleteMovieFovorite(id) {
    return{
        type: "DELETE_MOVIE_FAVORITE",
        payload: id
    }
  }