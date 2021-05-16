import React from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'
import styles from './Home.module.css'
import mainartwork from '../../assets/homepage-art.png'

const StyledTextField = styled(TextField)`
  min-width: 250px;
`

const StyledButton = styled(Button)`
  margin-top: 15px;
  margin-left: 30px;
`

export const Home = (props) => {
  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home__gridWrapper}>
        <div className={styles.home__gridContainer}>
          <div
            className={`${styles.home__gridItemContainer} ${styles.home__gridLeftItem}`}
          >
            <Typography variant="h3" component="h1">
              Hello there!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Looking for a movie to watch? Let us find a proper one just for
              you!
            </Typography>
            <div className={styles.genreSelectionContainer}>
              <StyledTextField
                variant="standard"
                margin="dense"
                id="idClientType"
                label="Choose a genre"
                select
                placeholder="Оберіть зі списку"
                type="text"
              >
                {/* {props.clientsListState.clientTypes */}
                {/*    ? props.clientsListState.clientTypes.map((option) => { */}
                {/*        return ( */}
                {/*            <MenuItem key={option.id} value={option.id}> */}
                {/*                {option.typeName} */}
                {/*            </MenuItem> */}
                {/*        ) */}
                {/*    }) */}
                {/*    : null} */}
              </StyledTextField>
              <StyledButton variant="contained" color="primary">
                Find a movie!
              </StyledButton>
            </div>
          </div>
          <div className={styles.home__gridItemContainer}>
            <img
              className={styles.homepageArt}
              src={mainartwork}
              alt="Watching a movie"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
