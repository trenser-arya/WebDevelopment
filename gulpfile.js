const gulp = require('gulp');
const header = require('gulp-header');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

const generateHeader = '/* Generated File: Do not edit directly. */';

function buildSystem() {
    return gulp.src('./index.css')
        .pipe(postcss())
        .pipe(header(generateHeader))
        .pipe((rename('styles.css')))
        .pipe(gulp.dest('./dist'));
}

exports.build = gulp.series(buildSystem);