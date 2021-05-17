import { genres } from '../predefined_data/genres'
import { STORE_RANDOM_MOVIE } from './actionTypes'

const initialState = {
  loader: false,
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
    default:
      return state
  }
}
