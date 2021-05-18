import React from 'react'
import animation from '../../assets/loader.svg'
import { LoaderContainer } from './Styled'

export const Loader = () => {
  return (
    <LoaderContainer>
      <img src={animation} alt="Loading..." />
    </LoaderContainer>
  )
}
