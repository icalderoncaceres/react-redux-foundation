/* using  gulp to minify javascript and css */
var _system = require('./system/system.js');
var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var replace = require('gulp-replace-task');
var rename = require('gulp-rename');

/* Task to compile js in one file */
gulp.task('compile-js', function() {
  //Runner compile js
  return gulp.src(path.join(__dirname, 'public/src/js/*.js'))
  //concat in one file
    .pipe(concat(global.conf.fileName))
  //minify all libs
    .pipe(minify({
    ext: {
      src: '-debug.js',
      min: '.min.js'
    }
  }))
  //Src to output
    .pipe(gulp.dest(path.join(__dirname, 'public/dist/js/')))
});

/* Task to change variables on index.html */
gulp.task('compile-index', function() {
  //Runner to return html with variables
  return gulp.src(path.join(__dirname, 'public/index.dev.html'))
  //replace all variables what you need
    .pipe(replace({
    //Rrplacement
    patterns: [
      {
        match: 'base_url',
        replacement: global.url.BASE_URL
      }, {
        match: 'output_file',
        replacement: global.conf.outputFile
      }
    ]
  }))

  //Return default
    .pipe(rename('index.html'))
    .pipe(gulp.dest(path.join(__dirname, 'public')));
});

/* default task */
gulp.task('default', ['compile-js', 'compile-index']);
