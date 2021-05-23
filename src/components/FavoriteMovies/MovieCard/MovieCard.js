/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {
  deleteMovieFromFavorites,
  hideInfoAlert,
  hideSuccessAlert,
  retrieveFavoriteMovies,
  showInfoAlert,
} from '../../../redux/appActions'

export const MovieCard = styled(Card)`
  min-height: 100%;
`

export const MoviePlotOutline = styled(Typography)`
  height: 100px;
  overflow-y: auto;
`

export const MoviePosterImage = styled(CardMedia)`
  height: 300px;
`

export const RemoveMovieButton = styled(Button)`
  background-color: #e57373;
  margin-top: 15px;

  &:hover {
    background-color: #f44336;
  }
`

export const MovieCardContainer = (props) => {
  const dispatch = useDispatch()
  return (
    <MovieCard>
      <CardActionArea>
        <MoviePosterImage image={props.moviePoster} title={props.movieTitle} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movieTitle}
          </Typography>
          <MoviePlotOutline variant="body2" color="textSecondary" component="p">
            {props.moviePlotOutline}
          </MoviePlotOutline>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <RemoveMovieButton
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            debugger
            deleteMovieFromFavorites(props.movieId)
            dispatch(retrieveFavoriteMovies())
            dispatch(
              showInfoAlert(`${props.movieTitle} was successfully removed`),
            )
            setTimeout(() => {
              dispatch(hideInfoAlert())
            }, 6000)
          }}
        >
          <DeleteIcon fontSize="small" />
          &nbsp; Remove movie
        </RemoveMovieButton>
        {/*<Button size="small" color="primary">*/}
        {/*  {props.movieId}*/}
        {/*</Button>*/}
      </CardActions>
    </MovieCard>
  )
}
