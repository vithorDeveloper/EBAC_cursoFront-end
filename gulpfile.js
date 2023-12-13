const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
  return gulp.src([
                    './src/style.scss', 
                    './src/config/*.scss', 
                    './src/ListaDeProdutos/produtos.scss', 
                    './src/navbar/menu.scss'
                ])
          .pipe(sass({
            outputStyle: 'compressed'
          }))
          .pipe(sourcemaps.write('./maps'))
          .pipe(gulp.dest('./build/styles'))      
}

function comprimirImagens() {
  return gulp.src('./src/images/*')
    .pipe(imagemin(
      {verbose: true}
    ))
    .pipe(gulp.dest('./build/images'))
}

function comprimirJS() {
  return gulp.src('./src/scripts/script.js')
      .pipe(uglify())
      .pipe(gulp.dest('./build/script'))
}

exports.default = function () {
    gulp.watch([
      './src/style.scss', 
      './src/config/*.scss', 
      './src/ListaDeProdutos/produtos.scss', 
      './src/navbar/menu.scss'
  ], {ignoreInitial: false}, gulp.series(compilaSass));

    gulp.watch("./src/images", {ignoreInitial: false}, gulp.series(comprimirImagens));
    gulp.watch("./src/scripts/script.js", {ignoreInitial: false}, gulp.series(comprimirJS));
}