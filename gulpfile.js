let gulp = require('gulp'); // подключеам gulp
let sass = require('gulp-sass'); // подключеам gulp-sass

gulp.task('sass', function(){ // создаем задачу sass
    gulp.src('./style/**/*.sass') // берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // преобразуем sass в css
        .pipe(gulp.dest('./style')); // выгружаем css-результат в папку project
});

gulp.task('scss', function(){ // создаем задачу sass
    gulp.src('./style/**/*.scss') // берем источник
        .pipe(sass().on('error', sass.logError)) // преобразуем sass в css
        .pipe(gulp.dest('./style')); // выгружаем css-результат в папку project
});

gulp.task('sass:watch', function(){
    gulp.watch(['./style/**/*.scss', './style/**/*.sass'], ['sass', 'scss']); // наблюдение за sass файлами в папке project
});

gulp.task('default', ['sass:watch']);