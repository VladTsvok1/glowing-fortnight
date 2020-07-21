const gulp = require('gulp');

const sass = require('gulp-sass');

const browser = require('browser-sync');

function style (){
    return gulp.src('./scss/**/*.scss').pipe(sass()).pipe(gulp.dest('./css'));
}

exports.style = style;
