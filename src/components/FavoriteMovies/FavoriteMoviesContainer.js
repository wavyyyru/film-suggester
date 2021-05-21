import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FavoriteMovies } from './FavoriteMovies'
import { retrieveFavoriteMovies } from '../../redux/appActions'
import { Loader } from '../Loader/Loader'

export const FavoriteMoviesContainer = () => {
  debugger
  const dispatch = useDispatch()
  const appState = useSelector((state) => state.applicationState)
  useEffect(() => {
    dispatch(retrieveFavoriteMovies())
  }, [])
  if (appState.favoriteMovies === null) {
    return <Loader />
  }
  return <FavoriteMovies favoriteMovies={appState.favoriteMovies} />
}
