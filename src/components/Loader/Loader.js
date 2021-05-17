import React from 'react'
import styled from 'styled-components'
import animation from '../../assets/loader.svg'

const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Loader = () => {
  return (
    <LoaderContainer>
      <img src={animation} alt="Loading..." />
    </LoaderContainer>
  )
}
