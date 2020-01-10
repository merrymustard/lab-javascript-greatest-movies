/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movie) {
  let sum = 0
  movie.forEach(e => (sum += Number(e.rate)))
  return Number((sum / movie.length).toFixed(2))
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  let filteredDrama = array.filter(movie => movie.genre.includes("Drama"))
  if (filteredDrama.length == 0) {
    return 0
  }
  return Number(ratesAverage(filteredDrama).toFixed(2))
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByYear = arr => {
  arr.sort((a, b) => {
    if (a.year < b.year) return -1
    if (a.year > b.year) return 1
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
  })
  return arr
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movie) {
  const spielbergArray = movie.filter(movie =>
    movie.director.includes("Steven Spielberg")
  )
  const spielbergDrama = spielbergArray.filter(movie =>
    movie.genre.includes("Drama")
  )
  return spielbergDrama.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  return movies
    .map(e => e.title)
    .sort()
    .slice(0, 19)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {
  const converter = value => {
    if (value.length > 6) {
      return parseInt(value) * 60 + parseInt(value.slice(3))
    } else if (value.length < 6 && value.length > 2) {
      return parseInt(value)
    } else {
      return parseInt(value) * 60
    }
  }
  return arr.map(movie => ({ ...movie, duration: converter(movie.duration) }))
}

const bestYearAvg = arr => {}
