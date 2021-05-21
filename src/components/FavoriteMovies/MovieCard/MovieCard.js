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

export const MovieCard = styled(Card)`
  min-height: 100%;
`

export const MoviePlotOutline = styled(Typography)`
  height: 80px;
  overflow-y: auto;
`

export const MoviePosterImage = styled(CardMedia)`
  height: 300px;
`

export const RemoveMovieButton = styled(Button)`
  background-color: #e57373;

  &:hover {
    background-color: #f44336;
  }
`

export const MovieCardContainer = (props) => {
  debugger
  return (
    <MovieCard>
      <CardActionArea>
        <MoviePosterImage
          image={props.moviePoster}
          title="Contemplative Reptile"
        />
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
        <RemoveMovieButton variant="contained" size="small" color="primary">
          <DeleteIcon fontSize="small" />
          &nbsp; Remove movie
        </RemoveMovieButton>
        <Button size="small" color="primary">
          {props.movieId}
        </Button>
      </CardActions>
    </MovieCard>
  )
}
