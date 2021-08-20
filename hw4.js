'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        while(this.count == '' || isNaN(this.count) || this.count == null) {
            this.count = prompt("Сколько фильмов Вы смотрели?", "");
        }
    },

    questionsAboutFilms: function() {
        let i = 0;
        while (i < 2) {
            const a = prompt("Название фильма?", "");
            const b = prompt("Оценка?", "");
            if(a == null || a == "" || a.length > 50 || b == null || isNaN(b)) {
                continue;
            }
            this.movies[a] = b;
            i++;
        }
    },

    setGenres: function() {
        let j = 0 ;
        while(j < 3) {
            const name = prompt(`Genres po ${(j + 1)}?`, "");
            if(name == '' || name == null) {
                continue;
            }
            this.genres[j] = name;
            j++;
        }
        let k = 1;
        this.genres.forEach(element => {
            console.log(`G ${k} -> ${element}`);
            k++;
        });
    },
    
    getStatus: function() {
        if(this.count < 10) {
            console.log('1');
        } else if ( this.count < 30) {
            console.log('2');
        } else if (this.count >= 30) {
            console.log('3');
        } else {
            console.log('error');
        }
    },

    showDB: function() {
        if(this.privat) {
            console.log(this);
        }
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
};


personalMovieDB.start();
personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.questionsAboutFilms();
// personalMovieDB.getStatus();
personalMovieDB.setGenres();
personalMovieDB.showDB();