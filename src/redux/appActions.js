import axios from 'axios'
import {
  ADD_MOVIE_TO_FAVORITES,
  HIDE_INFO_ALERT,
  HIDE_SUCCESS_ALERT,
  RETRIEVE_FAVORITE_MOVIES,
  SHOW_INFO_ALERT,
  SHOW_SUCCESS_ALERT,
  STORE_CHOSEN_GENRE_ENDPOINT,
  STORE_RANDOM_MOVIE,
  TOGGLE_INFO_UPDATE,
} from './actionTypes'

export function storeRandomMovie(movie) {
  return (dispatch) => {
    dispatch({
      type: STORE_RANDOM_MOVIE,
      payload: movie,
    })
  }
}

export function toggleInfoUpdate(value) {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_INFO_UPDATE,
      payload: value,
    })
  }
}

export function storeChosenGenreEndpoint(endpoint) {
  return (dispatch) => {
    dispatch({
      type: STORE_CHOSEN_GENRE_ENDPOINT,
      payload: endpoint,
    })
  }
}

export function fetchMovieList(query) {
  return axios.get(
    'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre',
    {
      params: { genre: query },
      headers: {
        'x-rapidapi-key': '0107db1c18msh764556930ecf372p1f9d45jsn0906c16ca7af',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      },
    },
  )
}

export function fetchRandomMovieFromList(movieId) {
  return axios.get('https://imdb8.p.rapidapi.com/title/get-overview-details', {
    params: {
      tconst: movieId,
      currentCountry: 'US',
    },
    headers: {
      'x-rapidapi-key': '0107db1c18msh764556930ecf372p1f9d45jsn0906c16ca7af',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    },
  })
}

export function fetchMovieData(query) {
  return async (dispatch) => {
    dispatch(toggleInfoUpdate(true))
    try {
      const movieList = await fetchMovieList(query)
      const movieId =
        movieList.data[Math.floor(Math.random() * movieList.data.length)]
      const cutMovieId = movieId.substring(7, movieId.length - 1)
      // console.log(cutMovieId)
      const response = await fetchRandomMovieFromList(cutMovieId)
      // console.log(response)
      debugger
      dispatch({
        type: STORE_RANDOM_MOVIE,
        payload: response.data,
      })
      dispatch(toggleInfoUpdate(false))
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        // dispatch(showAlert(error.response))
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      // console.log(error.config)
    }
  }
}

export function addMovieToFavorites(movie) {
  return (dispatch) => {
    dispatch({
      type: ADD_MOVIE_TO_FAVORITES,
      payload: movie,
    })
  }
}

export function showSuccessAlert(alertText) {
  debugger
  return (dispatch) => {
    dispatch({
      type: SHOW_SUCCESS_ALERT,
      payload: alertText,
    })
  }
}

export function hideSuccessAlert() {
  return (dispatch) => {
    dispatch({
      type: HIDE_SUCCESS_ALERT,
    })
  }
}

export function showInfoAlert(alertText) {
  return (dispatch) => {
    dispatch({
      type: SHOW_INFO_ALERT,
      payload: alertText,
    })
  }
}

export function hideInfoAlert() {
  return (dispatch) => {
    dispatch({
      type: HIDE_INFO_ALERT,
    })
  }
}

export function retrieveFavoriteMovies() {
  const localStorageObject = Object.entries(localStorage)
  const favoriteMoviesArray = []
  for (let i = 0; i < localStorageObject.length; i += 1) {
    favoriteMoviesArray.push(JSON.parse(localStorageObject[i][1]))
  }
  return (dispatch) => {
    dispatch({
      type: RETRIEVE_FAVORITE_MOVIES,
      payload: favoriteMoviesArray,
    })
  }
}

export function deleteMovieFromFavorites(movieId) {
  debugger
  localStorage.removeItem(movieId)
}
