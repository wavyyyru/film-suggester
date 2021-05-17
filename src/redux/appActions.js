import axios from 'axios'
import { STORE_RANDOM_MOVIE } from './actionTypes'

export function storeRandomMovie(movie) {
  return (dispatch) => {
    dispatch({
      type: STORE_RANDOM_MOVIE,
      payload: movie,
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
    try {
      const movieList = await fetchMovieList(query)
      const movieId =
        movieList.data[Math.floor(Math.random() * movieList.data.length)]
      const cutMovieId = movieId.substring(7, movieId.length - 1)
      console.log(cutMovieId)
      const response = await fetchRandomMovieFromList(cutMovieId)
      console.log(response)
      debugger
      dispatch({
        type: STORE_RANDOM_MOVIE,
        payload: response.data,
      })
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