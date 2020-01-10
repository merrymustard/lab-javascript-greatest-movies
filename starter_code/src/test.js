
/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
// Max 15 Minutes
function ratesAverage(movie) {
  let sum = 0
  movie.forEach(e => (sum += Number(e.rate)))
  return Number((sum / movie.length).toFixed(2))
}



//Necesitamos sumar todos los ratings y despues dividirlos netre cuantos hay
//lA FUNCION CREA UN CONTADOR QUE ES 0
//DESPUES ITERA POR TODO EL ARRAY SUMANDO A ESE NUMERO CADA UNO DE LOS VALORES
//Y SE LO ASIGNAS A SUM
//COMO VIENE COMO STRING CON EL NUMBER SE CONVIERTE A NUMERO Y SE VA SUMANDO
//LUEGO AGARRAS ESE NUMERO Y LO DIVIDES ENTRE TODO EL NUMERO DE PELICULAS QUE HAY/ EL LARGO DEL ARRAY
//CON TOFIXED LO RECORTAS A 2 DECIMALES


// Iteration 2: Drama movies - Get the average of Drama Movies
// Max 15 minutes
function dramaMoviesRate(array) {
  let filteredDrama = array.filter(movie => movie.genre.includes("Drama"))
  if (filteredDrama.length == 0) {
    return 0
  }
  return Number(ratesAverage(filteredDrama).toFixed(2))
}




//ESTA FUNCION ESTA FILTRANDO Y DEVUELVE TODAS LAS PELICULAS QUE SI SU GENERO INCLUYE DRAMA TE DEVUELVE TODAS LAS DEL GENERO
//FILTER TRAE LA CONDICION DE QUE SI ES TRUE TE DEVUELVE LO QUE LE PIDES
//GENERA UN NUEVO ARRAY FILTRADO
//SI FILTER DRAMA ES IGUAL A 0 DEVUELVE CERO 
//LUEGO RETURN AGARRA EL RATIN DE TODAS LAS PELICULAS Y LE ESTAMSO PASANDO EL ARRAY YA FILTRADO CON TODAS LAS PELICULAS DE DRAMA

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

//ACA RECIBIMOS UN ARRAY DE PELIS
//ESE ARRAY LE PASO LA FUNCION SORT QUE CONVIERTE EL ARRAY LO MUTA
//LE PASAMOS UNA FUNCION A SORT QUE LE DA EL CRITERIO PARA ORDENAR
// EN ESTE CASO TRABAJAMOS CON -1 Y UNO MENOS UNO VA ANTES Y UNO VA DESPUES
//ACA LO QUE HACEMOS ES CHECAR
// CUANDO LE DAS RETURN SALE DE LA FUNCION
// CONDICIONALES.. SI UNO D LOS CONDICIONALES SE CUMPLE YA NO SIGUE BAJANDO
//SI EL AÑO D A ES MAYO Q EL AÑO B VELO PONIENDO PARA ADELANTE
//SI SON DEL MISMO AÑO SE ORDENA POR TITULO
// Y SE DEVUELVE EL ARRAY SORTEADO


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


//HACEMOS UN FILTER COMO EN LA FUNCION ANTERIOR
//FILTRAMOS SPILBERG ARRAY PARA VER SI SON DE DRAMA
//DE AHI PONEMOS CUANTAS VIENDO EL LENGHT DEL ARRAY





// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// 20 Minutes
function orderAlphabetically(movies) {
  return movies.map(e => e.title).sort().slice(0, 19) 
}

// busca en un string con condiciones
// MAP convertimos el array en sólo los títulos
// el sort agarra la palabra en este caso y la ordena alfabéticamente dentro del array. Sort muta el array original
//Cortamos el array entre los valores 0 y 19 


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {
  const converter = value => {
    if (value.length > 6) {
      return parseInt(value)*60 + parseInt(value.slice(3))
    } else if (value.length < 6 && value.length > 2) {
      return parseInt(value)
    } else {
      return parseInt(value)*60
    }
  }
  return arr.map(movie => ({...movie, duration:converter(movie.duration)}))
}


//PARSE INT SACA UN NUMERO DE UN STRING QUE ESTA MEZCLADO CON LETRAS
// definimos una funcion que convierte cada valor  
// mide los que tienen 6 caracteres, horas y minutos
// el primer numero lo multiplica por 60 pq el primero son las horas
// los siguientes numeros que nos de pues tal cual
// si es menor que 6 pero mayor que dos solo tiene minutos
// y solo se devuelven los minutos
// si es mas pequeño q dos solo tiene horas entonces se multiplica por 60
// de ahi hacemos un map del array de peliculas donde cada pelicula q son objetos devolvemos ese objeto con spread operator pero la llave de duracion cambia, el valor que tenia lo estamos convirtiendo 


const bestYearAvg = arr => {}

