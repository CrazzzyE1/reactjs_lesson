'use strict';
let numberOfFilms = null;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


start();
questionsAboutFilms();
getStatus();
setGenres();
showDB();

function start() {
    while(numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = prompt("Сколько фильмов Вы смотрели?", "");
    }
    personalMovieDB.count = numberOfFilms;
}


function questionsAboutFilms() {
    let i = 0;
    while (i < 2) {
        const a = prompt("Название фильма?", "");
        const b = prompt("Оценка?", "");
        if(a == null || a == "" || a.length > 50 || b == null || isNaN(b)) {
            continue;
        }
        personalMovieDB.movies[a] = b;
        i++;
    }
}

function setGenres() {
    let j = 0 ;
    while(j < 3) {
        const name = prompt(`Genres po ${(j + 1)}?`, "");
        if(name == '' || name == null) {
            continue;
        }
        personalMovieDB.genres[j] = name;
        j++;
    }
}


function getStatus() {
    if(personalMovieDB.count < 10) {
        console.log('1');
    } else if ( personalMovieDB.count < 30) {
        console.log('2');
    } else if (personalMovieDB.count >= 30) {
        console.log('3');
    } else {
        console.log('error');
    }
}

function showDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}