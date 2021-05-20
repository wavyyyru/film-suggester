import styled, { keyframes } from 'styled-components'
import { Button, TextField } from '@material-ui/core'

const pulseAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
`

export const HomeWrapper = styled.div`
  height: 100%;
`

export const HomeGridWrapper = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
`

export const HomeGridContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: '. .';
`

export const HomeGridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:first-of-type {
    align-items: flex-start;
  }
`

export const GenreSelectForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const GenreSelect = styled(TextField)`
  min-width: 250px;
`

export const SearchMovieButton = styled(Button)`
  width: 150px;
  margin-top: 15px;
  margin-left: 30px;
  background-color: #4791db;

  &:hover {
    background-color: #1976d2;
  }
`

export const HomeArt = styled.img`
  width: 900px;
  animation-name: ${pulseAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`
