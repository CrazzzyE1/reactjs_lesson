const numberOfFilms = prompt("Сколько фильмов Вы смотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt("Название фильма?", "");
const b = prompt("Оценка?", "");
const c = prompt("Название фильма?", "");
const d = prompt("Оценка?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);