/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'

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
  min-width: 300px;
  width: 100%;
  height: 100%;
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
  margin-top: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
`

export const PlotSummaryHeading = styled(Typography)`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 500;
`

// const ImdbIcon = <FontAwesomeIcon icon={faImdb} />
export const MovieSuggestion = (props) => {
  useEffect(() => {
    return () => {}
  })
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
              {`IMDb rating: ${props.randomFetchedMovie.ratings.rating} / 10`}
            </Typography>
            <Typography variant="h6" component="p">
              {`Running time: ${props.randomFetchedMovie.title.runningTimeInMinutes} minutes`}
            </Typography>
          </ImdbRating>
          <PlotSummary>
            <PlotSummaryHeading component="h2" gutterBottom>
              Plot summary
            </PlotSummaryHeading>
            <Typography variant="body1">
              {props.randomFetchedMovie.plotSummary.text}
            </Typography>
          </PlotSummary>
        </InfoContainer>
      </GridContainer>
    </Wrapper>
  )
}
