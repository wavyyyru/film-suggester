import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import { HomeContainer } from './components/Home/HomeContainer'
import { routes } from './routes/routes'
import { MovieSuggestionContainer } from './components/MovieSuggestion/MovieSuggestionContainer'
import { ParticlesBackground } from './components/ParticlesBackground/ParticlesBackground'
import { SuccessAlert } from './components/Alerts/SuccessAlert'
import { FavoriteMoviesContainer } from './components/FavoriteMovies/FavoriteMoviesContainer'

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <Switch>
          <Route exact path={routes.homepage} component={HomeContainer} />
          <Route
            exact
            path={routes.movie_suggestion}
            component={MovieSuggestionContainer}
          />
          <Route
            exact
            path={routes.favorites}
            component={FavoriteMoviesContainer}
          />
        </Switch>
        <SuccessAlert />
      </StylesProvider>
      <ParticlesBackground />
    </div>
  )
}

export default App
