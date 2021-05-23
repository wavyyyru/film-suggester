/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React from 'react'
import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'
import { MovieCardContainer } from './MovieCard/MovieCard'

export const FavoriteMoviesWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  height: 100%;
`

export const FavoriteMoviesPageTitle = styled(Typography)`
  padding-top: 10px;
`

export const FavoriteMoviesGridWrapper = styled.div`
  max-height: 90%;
  overflow-y: auto;
  will-change: transform;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const FavoriteMoviesGridContainer = styled(Paper)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-auto-rows: auto;
  background-color: rgba(228, 228, 228, 0.5);
  padding: 10px;
`

export const FavoriteMovies = (props) => {
  return (
    <FavoriteMoviesWrapper>
      <FavoriteMoviesPageTitle variant="h4" component="h1">
        Here are the movies you&apos;ve saved to watch later.
        <Typography variant="subtitle1">Go ahead and pick one!</Typography>
      </FavoriteMoviesPageTitle>
      <FavoriteMoviesGridWrapper>
        <FavoriteMoviesGridContainer>
          {props.favoriteMovies.map((movie) => {
            return (
              <MovieCardContainer
                movieId={movie.id}
                movieTitle={movie.title.title}
                moviePoster={movie.title.image.url}
                moviePlotOutline={movie.plotOutline.text}
              />
            )
          })}
        </FavoriteMoviesGridContainer>
      </FavoriteMoviesGridWrapper>
    </FavoriteMoviesWrapper>
  )
}
