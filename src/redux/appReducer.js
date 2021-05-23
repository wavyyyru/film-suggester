import { genres } from '../predefined_data/genres'
import {
  ADD_MOVIE_TO_FAVORITES,
  STORE_CHOSEN_GENRE_ENDPOINT,
  STORE_RANDOM_MOVIE,
  SHOW_SUCCESS_ALERT,
  TOGGLE_INFO_UPDATE,
  HIDE_SUCCESS_ALERT,
  RETRIEVE_FAVORITE_MOVIES,
  SHOW_INFO_ALERT,
  HIDE_INFO_ALERT,
} from './actionTypes'

const initialState = {
  movieInfoIsBeingUpdated: true, //true - fetching, false - already fetched
  chosenGenreEndpoint: null,
  defaultGenreValue: genres[0],
  randomFetchedMovie: null,
  successAlertIsOpen: false,
  successAlertText: '',
  infoAlertIsOpen: false,
  infoAlertText: '',
  favoriteMovies: null,
}

export const appReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case STORE_RANDOM_MOVIE:
      return {
        ...state,
        randomFetchedMovie: action.payload,
      }
    case STORE_CHOSEN_GENRE_ENDPOINT:
      return {
        ...state,
        chosenGenreEndpoint: action.payload,
      }
    case TOGGLE_INFO_UPDATE:
      return {
        ...state,
        movieInfoIsBeingUpdated: action.payload,
      }
    case ADD_MOVIE_TO_FAVORITES:
      localStorage.setItem(action.payload.id, JSON.stringify(action.payload))
      return state
    case SHOW_SUCCESS_ALERT:
      return {
        ...state,
        successAlertIsOpen: true,
        successAlertText: action.payload,
      }
    case HIDE_SUCCESS_ALERT:
      return {
        ...state,
        successAlertIsOpen: false,
        successAlertText: '',
      }
    case SHOW_INFO_ALERT:
      return {
        ...state,
        infoAlertIsOpen: true,
        infoAlertText: action.payload,
      }
    case HIDE_INFO_ALERT:
      return {
        ...state,
        infoAlertIsOpen: false,
        infoAlertText: '',
      }
    case RETRIEVE_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload,
      }
    default:
      return state
  }
}
