import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styled, { keyframes } from 'styled-components'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Grow from '@material-ui/core/Grow'
import { routes } from '../../routes/routes'

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.95);
  }
`

export const FavoriteButtonWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;
  color: #f44336;
  animation-name: ${pulseAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  transition: color ease 0.3s;
  cursor: pointer;

  &:hover {
    color: #d32f2f;
  }
`

export const FavoriteSign = styled(Typography)`
  margin-left: 5px;
  font-size: 1rem;
`

export const FavoriteMoviesButton = () => {
  const history = useHistory()
  return (
    <Grow in timeout={2000} mountOnEnter unmountOnExit>
      <FavoriteButtonWrapper
        onClick={() => {
          //other logic
          history.push({
            pathname: routes.favorites,
          })
        }}
      >
        <FavoriteIcon />
        <FavoriteSign variant="button">Favorites</FavoriteSign>
      </FavoriteButtonWrapper>
    </Grow>
  )
}
