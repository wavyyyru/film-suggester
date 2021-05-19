import { genres } from '../predefined_data/genres'
import {
  STORE_CHOSEN_GENRE_ENDPOINT,
  STORE_RANDOM_MOVIE,
  TOGGLE_INFO_UPDATE,
} from './actionTypes'

const initialState = {
  movieInfoIsBeingUpdated: true, //true - fetching, false - already fetched
  chosenGenreEndpoint: null,
  defaultGenreValue: genres[0],
  randomFetchedMovie: null,
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
    default:
      return state
  }
}
