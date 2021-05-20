/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React from 'react'
import { MenuItem, Typography } from '@material-ui/core'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './Home.module.css'
import mainartwork from '../../assets/homepage-art.png'
import { genres } from '../../predefined_data/genres'
import { routes } from '../../routes/routes'
import {
  fetchMovieData,
  storeChosenGenreEndpoint,
} from '../../redux/appActions'
import {
  GenreSelect,
  GenreSelectForm,
  HomeArt,
  HomeGridContainer,
  HomeGridItem,
  HomeGridWrapper,
  HomeWrapper,
  SearchMovieButton,
} from './Styled'

export const Home = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: (values) => {
      dispatch(storeChosenGenreEndpoint(values.chosenGenreEndpoint))
      dispatch(fetchMovieData(values.chosenGenreEndpoint))
      // alert(
      //   JSON.stringify(
      //     values.chosenGenreEndpoint.substring(
      //       21,
      //       values.chosenGenreEndpoint.length,
      //     ),
      //     null,
      //     2,
      //   ),
      // )
      history.push({
        pathname: routes.movie_suggestion,
        search: values.chosenGenreEndpoint.substring(
          21,
          values.chosenGenreEndpoint.length,
        ),
      })
    },
  })
  return (
    <HomeWrapper>
      <HomeGridWrapper>
        <HomeGridContainer>
          <HomeGridItem>
            <Typography variant="h3" component="h1">
              Hello there!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Looking for a movie to watch? Let us find a proper one just for
              you!
            </Typography>
            <GenreSelectForm onSubmit={formik.handleSubmit}>
              <GenreSelect
                variant="standard"
                margin="dense"
                id="chosenGenre"
                label="Choose a genre"
                select
                placeholder="Choose a genre"
                type="text"
                onChange={formik.handleChange('chosenGenreEndpoint')}
                value={formik.values.chosenGenreEndpoint}
              >
                {genres.map((option) => {
                  return (
                    <MenuItem key={option.id} value={option.endpoint}>
                      {option.description}
                    </MenuItem>
                  )
                })}
              </GenreSelect>
              <SearchMovieButton
                variant="contained"
                color="primary"
                type="submit"
              >
                Find a movie!
              </SearchMovieButton>
            </GenreSelectForm>
          </HomeGridItem>
          <HomeGridItem>
            <HomeArt src={mainartwork} alt="Watching a movie" />
          </HomeGridItem>
        </HomeGridContainer>
      </HomeGridWrapper>
    </HomeWrapper>
  )
}
