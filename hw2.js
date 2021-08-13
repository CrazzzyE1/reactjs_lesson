'use strict';

const numberOfFilms = +prompt("Сколько фильмов Вы смотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
while (i < 2) {
    const a = prompt("Название фильма?", "");
    const b = prompt("Оценка?", "");
    if(a.length == 0 || a.length > 50 || b.length == 0 || a.length > 50) {
        continue;
    }
    personalMovieDB.movies[a] = b;
    i++;
}

let go;
if(personalMovieDB.count < 10) {
    console.log('1');
} else if ( personalMovieDB.count < 30) {
    console.log('2');
} else if (personalMovieDB.count >= 30) {
    console.log('3');
} else {
    console.log('error');
}

console.log(personalMovieDB);