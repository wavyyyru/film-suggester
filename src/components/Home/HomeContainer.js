import React from 'react'
import { Home } from './Home'
import { genres } from '../../predefined_data/genres'

export const HomeContainer = () => {
  const initialValues = {
    chosenGenreEndpoint: genres[0].endpoint,
  }
  return <Home initialValues={initialValues} />
}
