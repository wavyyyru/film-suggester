import React from 'react'
import { useSelector } from 'react-redux'
import { MovieSuggestion } from './MovieSuggestion'
import { Loader } from '../Loader/Loader'

export const MovieSuggestionContainer = () => {
  const appState = useSelector((state) => state.applicationState)
  if (appState.randomFetchedMovie === null) {
    return <Loader />
  }
  return <MovieSuggestion />
}
