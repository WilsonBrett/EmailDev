const gulp = require('gulp');
const gulp_mjml = require('gulp-mjml');
const rename = require('gulp-rename');
const mjml2html = require('mjml');
const htmlbeautify = require('gulp-html-beautify');

var input = process.env.npm_config_in ?? 'index';
var output = process.env.npm_config_out ?? 'index';
var client = process.env.npm_config_client;

gulp.task('default', function () {
  return gulp.src('./clients/' + client + '/src/' + input + '.mjml')
    .pipe(gulp_mjml(mjml2html, {minify: true}))
    .pipe(htmlbeautify({indent_size: 2}))
    .pipe(rename(output + '.html'))
    .pipe(gulp.dest('./clients/' + client + '/dist'))
})