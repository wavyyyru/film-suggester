import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer } from './components/Home/HomeContainer'
import { routes } from './routes/routes'
import { MovieSuggestionContainer } from './components/MovieSuggestion/MovieSuggestionContainer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routes.homepage} component={HomeContainer} />
        <Route
          exact
          path={routes.movie_suggestion}
          component={MovieSuggestionContainer}
        />
      </Switch>
    </div>
  )
}

export default App
