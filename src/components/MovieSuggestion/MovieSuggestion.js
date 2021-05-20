/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React from 'react'
import styled from 'styled-components'
import { Button, Paper, Typography } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import GradeIcon from '@material-ui/icons/Grade'
import { useDispatch } from 'react-redux'
import RefreshIcon from '@material-ui/icons/Refresh'
import FavoriteIcon from '@material-ui/icons/Favorite'
import {
  addMovieToFavorites,
  fetchMovieData,
  hideSuccessAlert,
  showSuccessAlert,
} from '../../redux/appActions'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GridContainer = styled(Paper)`
  background-color: rgba(228, 228, 228, 0.3);
  width: 70%;
  max-width: 1400px;
  //min-height: 660px;
  padding: 20px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 15px;
  grid-template-areas: 'poster info';
`
export const PosterImage = styled.img`
  border-radius: 8px;
  width: 448px;
  height: 665px;
  //width: 100%;
  //height: 100%;
`

export const PosterContainer = styled(Paper)`
  grid-area: poster;
  background-color: rgba(215, 215, 215, 0.3);
`

export const InfoContainer = styled(Paper)`
  grid-area: info;
  background-color: rgba(215, 215, 215, 0.3);
  padding: 10px;
`
//info layout

export const MovieTitle = styled(Typography)`
  font-size: 1.8rem;
  font-weight: 700;
`

export const TagsWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Tag = styled(Paper)`
  margin-bottom: 0;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 5px 8px;
  background-color: rgba(253, 253, 253, 0.3);

  &:first-of-type {
    margin-left: 0;
  }
`

export const ImdbRating = styled.div`
  margin-top: 5px;
`

export const PlotSummary = styled(Paper)`
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  max-width: 90%;
  max-height: 300px;
  overflow-y: auto;
`

export const PlotSummaryHeading = styled(Typography)`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 500;
`
export const ButtonsContainer = styled.div`
  margin-top: 20px;

  button {
    margin-right: 10px;
    color: white;
  }
`

export const SearchAgainButton = styled(Button)`
  background-color: #4791db;

  &:hover {
    background-color: #1976d2;
  }
`

export const WatchLaterButton = styled(Button)`
  background-color: #e33371;

  &:hover {
    background-color: #dc004e;
  }
`

// const ImdbIcon = <FontAwesomeIcon icon={faImdb} />
export const MovieSuggestion = (props) => {
  debugger
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <GridContainer elevation={6}>
        <PosterContainer elevation={3}>
          <PosterImage src={props.randomFetchedMovie.title.image.url} alt="" />
        </PosterContainer>
        <InfoContainer elevation={3}>
          <MovieTitle component="h1">
            {`${props.randomFetchedMovie.title.title} (${props.randomFetchedMovie.title.year})`}
          </MovieTitle>
          <TagsWrapper>
            {props.randomFetchedMovie.genres.map((genre) => {
              return <Tag elevation={3}>{genre}</Tag>
            })}
          </TagsWrapper>
          <ImdbRating>
            <Typography variant="h6" component="p">
              <GradeIcon fontSize="small" />
              &nbsp;
              {`IMDb rating: ${props.randomFetchedMovie.ratings.rating} / 10`}
            </Typography>
            {props.randomFetchedMovie.certificates ? (
              <Typography variant="caption" display="block">
                {props.randomFetchedMovie.certificates.US[0].ratingReason}
              </Typography>
            ) : null}

            <Typography variant="h6" component="p">
              <AccessTimeIcon fontSize="small" />
              &nbsp;
              {`Running time: ${props.randomFetchedMovie.title.runningTimeInMinutes} minutes`}
            </Typography>
          </ImdbRating>
          <PlotSummary>
            <PlotSummaryHeading component="h2" gutterBottom>
              Plot summary
            </PlotSummaryHeading>
            <Typography variant="body1">
              {props.randomFetchedMovie.plotSummary
                ? props.randomFetchedMovie.plotSummary.text
                : props.randomFetchedMovie.plotOutline.text}
            </Typography>
          </PlotSummary>
          <ButtonsContainer>
            <SearchAgainButton
              variant="contained"
              onClick={() => {
                dispatch(fetchMovieData(props.chosenGenreEndpoint))
              }}
            >
              <RefreshIcon fontSize="small" />
              &nbsp; Search again
            </SearchAgainButton>
            <WatchLaterButton
              variant="contained"
              onClick={() => {
                dispatch(addMovieToFavorites(props.randomFetchedMovie))
                dispatch(showSuccessAlert("Saved to 'Favorites'"))
                setTimeout(() => {
                  dispatch(hideSuccessAlert())
                }, 6000)
              }}
            >
              <FavoriteIcon fontSize="small" />
              &nbsp; Save to favorites
            </WatchLaterButton>
          </ButtonsContainer>
        </InfoContainer>
      </GridContainer>
    </Wrapper>
  )
}
